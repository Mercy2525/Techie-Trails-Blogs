from flask import Flask, render_template, request, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from datetime import datetime

app = Flask(__name)
app.config['SQLALCHEMY_DATABASE_URI'] = 'your_database_uri_here'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key_here'

db = SQLAlchemy(app)
migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.init_app(app)


@app.route('/api/blogs', methods=['GET'])
def get_blogs():
    blogs = Blog.query.all()
    blog_list = [{"id": blog.id, "blog_title": blog.blog_title, "blog_body": blog.blog_body, "author": blog.author} for blog in blogs]
    return {"blogs": blog_list}

@app.route('/api/blogs/<int:blog_id>', methods=['GET'])
def get_blog(blog_id):
    blog = Blog.query.get(blog_id)
    if blog:
        comments = Comment.query.filter_by(blog_id=blog_id)
        comment_list = [{"id": comment.id, "comment_body": comment.comment_body} for comment in comments]
        return {"blog": {"id": blog.id, "blog_title": blog.blog_title, "blog_body": blog.blog_body, "author": blog.author, "comments": comment_list}}
    return {"error": "Blog not found"}, 404

@app.route('/api/blogs', methods=['POST'])
@login_required
def create_blog():
    data = request.json
    blog_title = data.get('blog_title')
    blog_body = data.get('blog_body')
    author = current_user.username
    new_blog = Blog(blog_title=blog_title, blog_body=blog_body, author=author)
    db.session.add(new_blog)
    db.session.commit()
    return {"message": "Blog created successfully", "id": new_blog.id}, 201

@app.route('/api/blogs/<int:blog_id>', methods=['PUT'])
@login_required
def update_blog(blog_id):
    blog = Blog.query.get(blog_id)
    if blog:
        data = request.json
        blog.blog_title = data.get('blog_title', blog.blog_title)
        blog.blog_body = data.get('blog_body', blog.blog_body)
        blog.updated_at = datetime.utcnow()
        db.session.commit()
        return {"message": "Blog updated successfully"}, 200
    return {"error": "Blog not found"}, 404

@app.route('/api/blogs/<int:blog_id>', methods=['DELETE'])
@login_required
def delete_blog(blog_id):
    blog = Blog.query.get(blog_id)
    if blog:
        db.session.delete(blog)
        db.session.commit()
        return {"message": "Blog deleted successfully"}, 200
    return {"error": "Blog not found"}, 404


if __name__ == '__main__':
    app.run(debug=True)

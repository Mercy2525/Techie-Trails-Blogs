from flask import Flask
from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Blog, Comments, User


app = Flask(__name)
app.config['SQLALCHEMY_DATABASE_URI'] = 'your_database_uri_here'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = 'your_secret_key_here'

migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)


class Blogres(Resource):
    def get(self):
        blog_dict=[n.to_dict() for n in Blog.query.all()]
        response = make_response(
            jsonify(blog_dict),200
        )
        return response
 

    def post(self):
        data = request.get_json()        
        newrec= Blog(
            author=data.get('author'),
            blog_title=data.get('blog_title'),
            blog_body=data.get('blog_body'),
        )

        db.session.add(newrec)
        db.session.commit() 

        newrec_dict=newrec.to_dict()

        return make_response(
            jsonify(newrec_dict),200)

api.add_resource(Blogres, '/blog')


class BlogById(Resource):
    def get(self,id):
        blog= Blog.query.filter_by(id=id).first().to_dict()

        response=make_response(jsonify(blog),200)
        return response
    
    def patch(self,id):
        blog= Blog.query.filter_by(id=id).first()

        for attr in request.get_json():
            setattr(blog,attr,request.get_json()[attr])

            db.session.add(blog)
            db.session.commit()

            user_dict=blog.to_dict()

            response = make_response(jsonify(user_dict),200)
            return response



    def delete(self,id):
        blog= Blog.query.filter_by(id=id).first() 

        db.session.delete(blog)
        db.session.commit()

        response_body={"message": "Blog deleted successfully"},200
        return response_body
    
api.add_resource(BlogById,'/blog/<int:id>', endpoint='blogid')

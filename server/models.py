# create models, user, blog,com
# Models-DB
# Users-name, password,username
# Blog -blog_title, blog_body, author (10 blogs)
# Comments- comment_body,  created_at, update_at , name(user_id, blog_id)


# Relationships
# (one User many comments)
# (one Blog has many comments)

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
db = SQLAlchemy()

class User(db.Model,SerializerMixin):
    __tablename__='users'
    serialize_rules = ('-comments.user',)

    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    username = db.Column(db.String)
    comments = db.relationship('Comments', backref='user')

class Blog(db.Model,SerializerMixin):
    __tablename__= 'blogs'
    serialize_rules = ('-comments.blog',)

    id = db.Column(db.Integer, primary_key=True)
    blog_title = db.Column(db.String)
    blog_body = db.Column(db.String)
    author = db.Column(db.String)
    comments = db.relationship('Comments', backref='blog')

class Comments(db.Model,SerializerMixin):
    __tablename__='comments'
    serialize_rules = ('-user.comments', '-blog.comments',)

    id = db.Column(db.Integer, primary_key=True)
    comment_body = db.Column(db.String)
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate= db.func.now())
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'))
    blog_id = db.Column(db.Integer,db.ForeignKey('blogs.id'))






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

class User(db.Model):
    __tablename__='users'

    id =  db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    username = db.Column(db.String)
    comments = db.relationship('Comments', back_populates='users')

class Blog(db.Model):
    __tablename__= 'blogs'

    id = db.Column(db.Integer, primary_key=True)
    blog_title = db.Column(db.String)
    blog_body = db.Column(db.String)
    author = db.Column(db.String)
    comments = db.relationship('Comments', back_populates='blogs')

class Comments(db.Model):
    __tablename__='comments'

    id = db.Column(db.Integer, primary_key=True)
    comment_body = db.Column(db.String)
    created_at = db.Column(db.DateTime,server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate= db.func.now())
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'))
    blog_id = db.Column(db.Integer,db.ForeignKey('blogs.id'))






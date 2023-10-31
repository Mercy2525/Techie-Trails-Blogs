from flask import Flask
from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource
from models import db, Restaurant, Pizza, RestaurantPizza

migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)


app = Flask(__name__)

class Blogres(Resource):
    def get(self):
        blog_dict=[n.to_dict() for n in blog.query.all()]
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
        return make_response(
            jsonify(
                {'author': newrec.author, 'blog_title': newrec.blog_title, 'blog_body': newrec.blog_body }))

api.add_resource(Blogres, '/blog')
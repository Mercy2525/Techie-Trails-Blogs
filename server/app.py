from flask import Flask
from flask_migrate import Migrate
from models import db,User,Blog,Comments

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///app.db'
app.config['JSONIFY_PRETTYPRINT_REGULAR']= True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db.init_app(app)

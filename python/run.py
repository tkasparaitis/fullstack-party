from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_jwt_extended import (create_access_token, create_refresh_token, jwt_required, jwt_refresh_token_required, get_jwt_identity, get_raw_jwt)
from passlib.hash import bcrypt
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['JWT_SECRET_KEY'] = 'testio1'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:toka2702@localhost/testio'
db = SQLAlchemy(app)
ma = Marshmallow(app)
jwt = JWTManager(app)
CORS(app)

import views, issues, users, comments


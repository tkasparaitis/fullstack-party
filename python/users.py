from run import app, db, ma, request, bcrypt, create_access_token
from flask import jsonify


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(255), unique=True)

    def __init__(self, email, password):
        self.email = email
        self.password = password


class UsersSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('id', 'email', 'password')

user_schema = UsersSchema()
users_schema = UsersSchema(many=True)


# endpoint to create new user
@app.route("/api/auth/register", methods=["POST"])
def add_user():
    username = request.json['username']
    email = request.json['email']

    new_user = User(username, email)

    db.session.add(new_user)
    db.session.commit()

    return jsonify(new_user)

@app.route("/api/auth/login", methods=["POST"])
def user_login():

    email = request.json['email']
    password = request.json['password']
    user = Users.query.filter(getattr(Users,'email')==email).first()

    if not user:
        return jsonify({'auth': False,
            'message': 'User {} doesn\'t exist'.format(email) })

    if bcrypt.verify(password, user.password):
        access_token = create_access_token(identity=email)
        return jsonify({ 'auth': True,
            'access_token': access_token })
    else:
        return jsonify({ 'auth': False,
            'message': 'Wrong credentials'})


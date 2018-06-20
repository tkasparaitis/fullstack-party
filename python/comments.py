from run import app, db, ma
from flask import jsonify

class Comments(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    issue = db.Column(db.String(255))
    author = db.Column(db.String(255))
    avatr = db.Column(db.String(255))
    text = db.Column(db.String(255))
    timestamp = db.Column(db.String(255))

    def __init__(self, issue, author, avatr, text, timestamp):
        self.issue = issue
        self.author = author
        self.avatr = avatr
        self.text = text
        self.timestamp = timestamp

class CommentsSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('id', 'issue', 'author', 'avatr', 'text', 'timestamp')

comment_schema = CommentsSchema()
comments_schema = CommentsSchema(many=True)

@app.route("/comment/<issue>", methods=["GET"])
def comments(issue):
    comments = Comments.query.filter(getattr(Comments,'issue')==issue)
    return comments_schema.jsonify(comments)
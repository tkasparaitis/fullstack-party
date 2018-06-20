from run import app, db, ma
from flask import jsonify

class Issues(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    status = db.Column(db.Integer)
    author = db.Column(db.String(255))
    labels = db.Column(db.String(255))
    timestamp = db.Column(db.String(255))

    def __init__(self, title, status, author, labels, timestamp):
        self.title = title
        self.status = status
        self.author = author
        self.labels = labels
        self.timestamp = timestamp


class IssuesSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ('id', 'title', 'status', 'author', 'labels', 'timestamp')


issue_schema = IssuesSchema()
issues_schema = IssuesSchema(many=True)

@app.route("/issue/db/info", methods=["GET"])
def issues_detail():
    active_users = Issues.query.filter(getattr(Issues,'status')==1).count()
    all_users = Issues.query.count()
    print(all_users)
    return jsonify([
    {
        "total": all_users,
        "open": active_users
    }
])

@app.route("/issue/entry/<id>", methods=["GET"])
def issue_detail(id):
    issue = Issues.query.get(id)
    return issue_schema.jsonify(issue)

@app.route("/issue/<page>", methods=["GET"])
def issue_page(page):
    page = int(page)
    issues = Issues.query.filter(getattr(Issues,'status')==1).limit(25).offset(page*25)
    return issues_schema.jsonify(issues)
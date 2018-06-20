var db = require('../db');

db.connect(function() {
        console.log('Data has been loaded...')
    });

exports.getByIssueId = function(values, done) {
    var data = [values['issue']];

    db.get().query('SELECT * FROM comments WHERE issue = ?', data, function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}
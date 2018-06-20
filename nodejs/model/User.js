var db = require('../db');

db.connect(function() {
        console.log('Data has been loaded...')
    });

exports.create = function(values, done) {
    var data = [values['email'], values['password']]
    db.get().query('INSERT INTO users (email, password) VALUES(?, ?)', data, function(err, result) {
        if (err) return done(err)
        done(null, result.insertId)
    })
}

exports.findOne = function(values, done) {
    var data = [values['email']];

    db.get().query('SELECT * FROM users where email = ?', values['email'], function (err, result) {
        row = result[0]
        if(err) return done(err)
        done(null, row)
    });
}

exports.getAll = function(done) {
    db.get().query('SELECT * FROM users', function (err, rows) {
        if(err) return done(err)
        done(null, rows)
    })
}

exports.getIdByEmail = function(email, done) {
    db.get().query('SELECT * FROM users WHERE email = "?"', email, function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}
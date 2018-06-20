var db = require('../db');

db.connect(function() {
        console.log('Data has been loaded...')
    });

exports.getAll = function(values, done) {
    var data = [values['limit']*(values['page']-1), values['limit']]
    db.get().query('SELECT * FROM issues where status = 1 order by id desc limit ?, ?', data, function (err, rows) {
        if(err) return done(err)
        done(null, rows)
    })
}

exports.getById = function(values, done) {
    var data = [values['id']];
    console.log(values)
    db.get().query('SELECT * FROM issues WHERE id = ?', data, function (err, rows) {
        if (err) return done(err)
        done(null, rows[0])
    })
}

exports.getInfo = function(done){
    db.get().query('SELECT count(id) total, sum(if(status =1,1,0)) open FROM issues', function (err, rows) {
        if (err) return done(err)
        done(null, rows)
    })
}
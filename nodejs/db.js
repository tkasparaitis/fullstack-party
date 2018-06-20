// var mongoose = require('mongoose');
// //mongoose.connect('mongodb://yourMongoDBURIGoesHere');
// mongoose.connect('mongodb://testio:testio1@ds159020.mlab.com:59020/testio');

var config = require('./config');
var mysql = require('mysql')
    , async = require('async');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "toka2702",
//     database: "testio"
// });
//
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
// });

var state = {
    pool: null
}

exports.connect = function(done) {
    state.pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'toka2702',
        database: 'testio'
    })
    done()
}

exports.get = function() {
    return state.pool
}
var express = require('express');
var app = express();

var AuthController = require('./controler/AuthController');
var IssueController = require('./controler/IssueController');
var CommentController = require('./controler/CommentController');

// var UserController = require('./controler/UserController');
// app.use('/users', UserController);

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api/auth', AuthController);
app.use('/issue', IssueController);
app.use('/comment', CommentController);

module.exports = app;
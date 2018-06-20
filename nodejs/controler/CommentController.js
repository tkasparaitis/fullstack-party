var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Comment = require('../model/Comment');

// RETURNS ALL ISSUES BY PAGES FROM DATABASE
router.get('/:issue', function (req, res) {
    Comment.getByIssueId({ issue: parseInt(req.params.issue)}, function (err, issues) {
        if (err) return res.status(500).send("There was a problem finding the issue comment.");
        res.status(200).send(issues);
    });
});

module.exports = router;
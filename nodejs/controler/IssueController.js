var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Issue = require('../model/Issue');

// RETURNS ALL ISSUES BY PAGES FROM DATABASE
router.get('/:page', function (req, res) {
    Issue.getAll({ page: parseInt(req.params.page), limit: 25 }, function (err, issues) {
        if (err) return res.status(500).send("There was a problem finding the issues.");
        res.status(200).send(issues);
    });
});

// GETS A ISSUE FROM THE DATABASE
router.get('/entry/:id', function (req, res) {
    Issue.getById({ id: req.params.id }, function (err, issues) {
        if (err) return res.status(500).send("There was a problem finding issue.");
        if (!issues) return res.status(404).send("No issue found.");
        res.status(200).send(issues);
    });
});

// GETS INFO ABOUT ISSUES
router.get('/db/info', function (req, res) {
    Issue.getInfo(function (err, info) {
        if (err) return res.status(500).send("There was a problem.");
        if (!info) return res.status(404).send("No info found.");
        res.status(200).send(info);
    });
});

module.exports = router;
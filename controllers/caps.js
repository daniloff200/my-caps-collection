const passport = require('passport');
const jwt = require('express-jwt');
const { validationResult } = require('express-validator/check');

const Cap = require('../models/Cap');

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

exports.addNew = function (req, res) {
    let todo = new Cap({
        'title': req.body.title,
        'brewery': req.body.brewery,
        'country': req.body.country,
        'name': req.body.name,
        'myUniqueID': req.body.myUniqueID,
    });

    todo.save((err) => {
        if (err)
            sendError(err, res);
        response.data = 'Cap was added';
        res.json(response);
    });
};

exports.getCaps = function (req, res) {
    Cap.find({}, function (err, todos) {
        if (err)
            sendError(err, res);
        response.data = todos;
        res.json(response);
    });
};

exports.getCapById = function (req, res) {
    let capID = req.params.capid;


    Cap.findOne({"myUniqueID": capID}, function (err, cap) {
        if (err)
            sendError(err, res);
        response.data = cap;
        res.json(response);
    });
};

exports.deleteCap = function (req, res) {
    let capID = req.params.capid;



    Cap.findByIdAndRemove(capID, function (err, todo) {
        if(err)
            sendError(err, res);
        response.data = 'Cap deleted';
        res.json(response);
    });
};

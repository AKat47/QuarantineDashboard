var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Quarantine = require('../models/Quarantine.js');

/* GET ALL QuarantineS */
router.get('/', function(req, res, next) {
  Quarantine.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Quarantine BY ID */
router.get('/:id', function(req, res, next) {
  Quarantine.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Quarantine */
router.post('/', function(req, res, next) {
  Quarantine.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Quarantine */
router.put('/:id', function(req, res, next) {
  Quarantine.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Quarantine */
router.delete('/:id', function(req, res, next) {
  Quarantine.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;

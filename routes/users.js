var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('User').find((err, users) => {
    (err) ? res.send(err) : res.send(users);
  });
});

module.exports = router;

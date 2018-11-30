var express = require('express');
var router = express.Router();
var User = require('../mongo/userSchema');

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('this just happened');
  const userData = {
    email: 'bueno8485@gmail.com',
    username: 'tebueno',
    password: 'Tom3858!',
    passwordConf: 'Tom3858!',
  }
  //use schema.create to insert data into the db
  User.create(userData, function (err, user) {
    if (err) {
      console.log('stuff');
      res.send(err);
    } else {
      res.send('Done!');
    }
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var Users = require('../lib/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/list', { users: Users.findAll() });
});

router.get('/:userId', function(req, res, next) {
  console.log("userId:" + req.params.userId);
  res.render('users/edit', { user: Users.findById(req.params.userId) });
});


module.exports = router;

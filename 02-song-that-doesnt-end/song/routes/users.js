var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/index', function(req, res, next) {
  res.render('users/index');
});

module.exports = router;

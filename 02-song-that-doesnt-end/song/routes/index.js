var express = require('express');
var router = express.Router();
var info = require('../public/javascripts/object.js');


/* GET home page. */
router.get('/', function(req,res,next){
  res.render('index', info[0]);
});

router.get('/:verse', function(req, res, next) {
  var verse = req.params.verse;
  var i;
  switch (verse) {
    case 'verse2':
      i = 1;
      break;
    case 'verse3':
      i = 2;
      break;
    case 'verse4':
      i = 3;
      break;
    default:
      i = 0;
  }
  res.render('index', info[i]);
});

module.exports = router;

var express = require('express');
var router = express.Router();
var object = require('../public/javascripts/object');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hipstafy' });
});

router.post('/hippie', function(req,res,next){
  var responseArray = req.body.hipstafied.split(' ');
  var sendArray = [];
  for (var i = 0; i < responseArray.length; i++) {
    var num = Math.floor(Math.random() * ((object.length-1) - 0))  + 0;
    sendArray.push(responseArray[i] + ' ' + object[num])
  };
  res.send(sendArray);
});

module.exports = router;

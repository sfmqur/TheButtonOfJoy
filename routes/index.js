var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

//get ask page
router.get('/ask', function(req,res){
  res.render('ask');
});

//get done page
router.get('/done', function(req,res){
  res.render('done');
});

//get verify page
router.get('/verify', function(req,res){
  res.render('verify');
});

module.exports = router;

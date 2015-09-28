/**
 * Created by sam on 9/27/15.
 */

var express = require('express');
var router = express.Router;

//get verify page
router.get('/verify', function(req, res){
    res.render('verify');
});

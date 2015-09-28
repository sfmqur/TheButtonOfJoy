/**
 * Created by sam on 9/27/15.
 */

var express = require('express');
var router = express.Router;

//get done page
router.get('/done', function(req,res){
    res.render('done');
});
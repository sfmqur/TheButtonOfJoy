/**
 * Created by sam on 9/27/15.
 */

var express = require('express');
var router = express.Router();

// get ask page
router.get('/ask', function(req, res){
    res.render('ask');
});

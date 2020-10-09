const express = require('express');
const Demo =require('./Controller/logic');
const app = express();

app.post('/Search', function(req,res) {
    console.log(req.body)
    var result = new Demo().Search(req)
    res.json(result)
} );

app.get('/count', function(req,res) {
    console.log(req.body)
    var result = new Demo().count(req)
    res.json(result)
} );

module.exports = app;
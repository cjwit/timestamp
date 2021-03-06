'use strict';

var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.sendFile(process.cwd() + '/public/index.html');
});

app.get('/:input', function(req, res) {
    var input = req.params.input;

    if (+input) {
        input = +input
    }
    
    var date = new Date( ( input === 'today' ? Date.now() : input ) )
    var result = {
        unix: date.getTime(),
        natural: date.toDateString()
    };

    res.send(JSON.stringify(result));
});

app.listen(process.env.PORT || 8080);
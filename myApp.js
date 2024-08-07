let express = require('express');
let app = express();
let dotenv = require('dotenv').config();

app.use('/', function(req, res, next) {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
})

app.get('/', function(req, res) {
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
})

app.use('/public', express.static(__dirname + '/public'))

app.get('/json', function(req, res) {
    let msg;
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        msg = "HELLO JSON";
    } else {
        msg = "Hello json";
    };

    res.json({"message": msg});
})

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({"time": req.time});
});

app.get('/:word/echo', function(req, res) {
    res.json({"echo": req.params.word});
});

app.route('/name').get(function(req, res) {
    res.json({"name": req.query.first + " " + req.query.last});
});

console.log("Hello World");


































 module.exports = app;

let express = require('express');
let app = express();
let dotenv = require('dotenv').config();

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

console.log("Hello World");


































 module.exports = app;

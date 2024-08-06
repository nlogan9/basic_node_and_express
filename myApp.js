let express = require('express');
let app = express();

app.get('/', function(req, res) {
    absolutePath = __dirname + '/views/index.html'
    res.sendFile(absolutePath);
})

app.use('/public', express.static(__dirname + '/public'))

console.log("Hello World");


































 module.exports = app;

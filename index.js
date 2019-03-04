var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', { a: 'Satish N', b: 'satish@yahoo.com' });
});

app.listen(3000);

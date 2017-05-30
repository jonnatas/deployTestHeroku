var express = require('express'),
    multiparty = require('connect-multiparty'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator');

var consign = require('consign');
var app = express();

// views is directory for all template files
app.set('view engine', 'ejs');
app.set('views', './app/views');


app.use(express.static('./app/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multiparty());

app.use(expressValidator());

consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

//app.set('port', (process.env.PORT || 5000));

app.listen(3000, function() {
    console.log('listening on *:3000');
});
/*
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
*/
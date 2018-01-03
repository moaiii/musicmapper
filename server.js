// require('dotenv').config()
var express = require('express');
var path = require('path');
var debug = require('debug')('server');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');

/**
 * Express connection
 */
var app = new express();

/**
 * Middlewares
 */
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }

    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

/**
 * If the user tries to directly navigate to one of the app's client routes we
 * need to make sure that the React App is loaded & the ReactRouter handles it
 */
app.get('*', function(req, res, next) {
  debug('Request: ['+req.method+']', req.originalUrl);
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

var server = app.listen(4444, "0.0.0.0", function(){
  console.log('Server running on port: ' + server.address().port);
});
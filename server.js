// require('dotenv').config()
var express = require('express');
var path = require('path');
var debug = require('debug')('server');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/** 
/**
 * Database connection
 */
// var mongo = require('mongodb');
// var mongoose = require('mongoose');

// let mongoURL = `mongodb://${process.env.DB_USER_DEV}:${process.env.DB_PASS_DEV}@${process.env.DB_HOST_DEV}:${process.env.DB_PORT_DEV}/${process.env.DB_NAME_DEV}`;
// let mongoURL = `mongodb://${process.env.DB_USER_PROD}:${process.env.DB_PASS_PROD}@${process.env.DB_HOST_PROD}:${process.env.DB_PORT_PROD}/${process.env.DB_NAME_PROD}`;

// console.log("Connecting to ", mongoURL);

// mongoose.connect(mongoURL); 

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));

// db.once('open', function() {
//   console.log(`Connected to db @ ${process.env.DB_HOST_DEV}`);
// });


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

app.use(passport.initialize());
app.use(passport.session());

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

var server = app.listen(8080, "0.0.0.0", function(){
  debug('Server running on port: ' + server.address().port);
});
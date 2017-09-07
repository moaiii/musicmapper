var express = require('express');
var path = require('path');
var debug = require('debug')('server');

const default_port = 3000;

var app = new express();

app.use(express.static(path.join(__dirname, 'public')));

/**
 * If the user tries to directly navigate to one of the app's client routes we
 * need to make sure that the React App is loaded & the ReactRouter handles it
 */
app.get('*', function(req, res, next) {
  debug('Request: ['+req.method+']', req.originalUrl);
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

/*var server = app.listen(process.env.PORT || default_port, "0.0.0.0", ()=>{
  debug('Server running on port: ' + server.address().port);
});*/

var server = app.listen(process.env.PORT || default_port, "0.0.0.0", function(){
  debug('Server running on port: ' + server.address().port);
});
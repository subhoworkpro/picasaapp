var express = require('express'),
  app = express(),
  port = process.env.PORT || 8000;


var routes = require('./api/routes/galleryRoutes'); //importing route
routes(app);

app.listen(port);

console.log('Picasa Web Album RESTful API server started on: ' + port);
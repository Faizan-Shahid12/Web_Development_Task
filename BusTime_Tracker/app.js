var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require("mongoose");

var PORT = 4000

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Connect to MongoDB 
mongoose.connect("mongodb://localhost:27017/BusTracker", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// BusTracker APIS

var VehicleRouter = require('./routes/VehicleRouter');
var RoutesRouter = require('./routes/RoutesRouter');
var DirectionRouter = require('./routes/DirectionRouter');
var StopRouter = require('./routes/StopRouter');
var PatternsRouter = require('./routes/patternRouter');


app.use('/api/vehicles', VehicleRouter);
app.use('/api/routes', RoutesRouter);
app.use('/api/directions', DirectionRouter);
app.use('/api/stops', StopRouter);
app.use('/api/patterns', PatternsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;

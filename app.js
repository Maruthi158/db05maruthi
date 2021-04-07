var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var compartmentRouter = require('./routes/compartment');
var starsRouter = require('./routes/stars');
var slotRouter = require('./routes/slot');
var Compartment = require('./models/compartment');
var resourceRouter = require('./routes/resource');
var app = express();

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  { useNewUrlParser: true, useUnifiedTopology: true });

  //Get the default connection
  var db = mongoose.connection;
  //Bind connection to error event
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once("open", function () {
    console.log("Connection to DB succeeded")
  });

  // We can seed the collection if needed on server start
 async function recreateDB(){
  // Delete everything
  await Compartment.deleteMany();
  let instance1 = new Compartment({compartment_name:"B", compartment_ID:'1',compartment_type:"AC"});
  let instance2 = new Compartment({compartment_name:"C", compartment_ID:'2',compartment_type:"Sleeper"});
  let instance3 = new Compartment({compartment_name:"D", compartment_ID:'3',compartment_type:"AC"});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First object saved")
  });
  instance2.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("Second object saved")
    });
  instance3.save( function(err,doc) {
      if(err) return console.error(err);
      console.log("Third object saved")
      });
  }
  let reseed = true;
  if (reseed) { recreateDB();} 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/compartment', compartmentRouter);
app.use('/stars', starsRouter);
app.use('/slot', slotRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

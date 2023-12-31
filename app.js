var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');




const mongoose = require('mongoose')
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/products');
var categoryRouter = require('./routes/category');
var orderRouter = require('./routes/order');
var favoriteRoutes = require('./routes/favorite');

const authRouter = require('./routes/auth');

//Informacion base de datos
const dataBaseURL = "mongodb+srv://angelaavalos:Love241001@cluster0.wymsswx.mongodb.net/"


mongoose.connect(dataBaseURL);
mongoose.connection.on('open',function(){
  console.log("Connection Ok")
})

var app = express();
app.use(cors());


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
app.use('/products', productRouter);
app.use('/category', categoryRouter);
app.use('/order', orderRouter)
app.use('/favorite',favoriteRoutes)
app.use('/auth',authRouter);



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

module.exports = app;

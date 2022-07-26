var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');

require('dotenv').config();
require('./config/database');
require('./config/passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises')
const foodsRouter = require('./routes/foods')
const commentsRouter = require('./routes/comments')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    mongoUrl: process.env.DATABASE_URL,
    client: process.env.GOOGLE_CLIENT_ID
  }),
}));

// app.use(session({... code above
app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

const isLoggedIn = require('./config/auth');


app.use('/', indexRouter);
app.use('/users', isLoggedIn, usersRouter);
app.use('/exercises', isLoggedIn, exercisesRouter);
app.use('/foods', isLoggedIn, foodsRouter);
app.use('/', isLoggedIn, commentsRouter);


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
app.listen(3000, '0.0.0.0', () => console.log(`listening on port 3000`));
module.exports = app;

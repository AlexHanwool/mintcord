const express = require('express');
const path = require('path');
const session = require('express-session');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const { sequelize } = require('../models');
const passport = require('passport');
const webSocket = require('./socket');

require('dotenv').config();
const passportConfig = require('./passport');

const authRouter = require('./routes/auth');

const app = express();
sequelize.sync();
passportConfig(passport);

app.set('port', process.env.PORT || 8000);

// will make npm run dev script 
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

sessionMiddleware = session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  }
});
app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static(path.join(__dirname, '../../mintcord-frontend/build/')));
app.get('*', function (req, res, next){
  express.static(path.join(__dirname, '../../mintcord-frontend/build/'));
});
app.use('/auth', authRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  return res.status(err.status || 500);
  // res.render('error');
});

const server = app.listen(app.get('port'), () => {
  console.log('listnening at port', app.get('port'));
});

webSocket(server, app, sessionMiddleware);

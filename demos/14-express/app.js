// Dépenses d'Express (hormis node:path)
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Les routes de l'application
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Instancier une application Express
var app = express();

// view engine setup
// On définit le moteur de template avec le dossier où on stocke les vues (pages)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Le middleware pour gérer les logs
app.use(logger('dev'));
// Middleware pour transformer tout le body au format JSON en objet JS (deserialisation)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// Faire de la route /public une route statique => le contenu dans les sous-dossiers de /public sera
// identique pour tout le monde
app.use(express.static(path.join(__dirname, 'public')));

// Liaison entre les chemins et les routes définis par l'application
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Middleware qui gère les erreurs 404
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// Middleware qui intercepte les autres types d'erreurs
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

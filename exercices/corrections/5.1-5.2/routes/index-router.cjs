var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exercice 5.1 et 5.2' });
});

module.exports = router;

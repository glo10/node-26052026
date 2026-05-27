var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // render('index') va charger le fichier views/index.ejs
  // { title: 'Express' } la data transmise dans cette vue pour qu'elle soit affichée
  res.render('index', { title: 'Toto' });
});

router.get('/welcome', (req, res, next) => {
  res.render('welcome', { firstname: 'Glodie'})
})

module.exports = router;

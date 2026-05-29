const express = require('express');
const router = express.Router();
const { checkLogin } = require('../middlewares/check-login');
const { findAll, findOne } =  require('../controllers/user-controller.cjs');
router.param('login', checkLogin)
router.get('/', findAll);
router.get('/:login', findOne)

module.exports = router;

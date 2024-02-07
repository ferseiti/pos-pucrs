var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>This is the Users route</h1>');
});

router.get('/1', function(req, res, next) {
  res.send('<h1>User number 1: Apolinário</h1>');
});

module.exports = router;

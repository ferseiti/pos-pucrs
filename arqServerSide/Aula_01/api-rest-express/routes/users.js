var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('This is the users home');
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.send(`Show user id ${id}`);
});

router.post('/', (req, res) => {
  res.send('Create user');
});

router.put('/', (req, res) => {
  res.send('Update user');
});

router.delete('/', (req, res) => {
  res.send('Delete user');
});

module.exports = router;

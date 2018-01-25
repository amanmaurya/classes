var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Courses' });
});


router.get('/getallcourse', function(req, res, next) {
  fs.readdir('assets/', (err, data) => {
  if (err) throw err;
  res.json(data);
});
});

module.exports = router;

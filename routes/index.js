const { response } = require('express');
var express = require('express')
var router = express.Router()
var Bilda = require('../Bilda')

/* GET home page. */
router.post('/create_collection', function(req, res, next) {
  let token = req.body.token;
  let bilda = new Bilda(token);

  var name = req.body.name
  var fields = req.body.fields
  var reponseOfBilda = bilda.createCollection(name, fields);
  reponseOfBilda.then(r => {
    res.json({message: r})
  })
  
});

module.exports = router;

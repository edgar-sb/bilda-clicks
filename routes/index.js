const { response } = require('express');
var express = require('express')
var router = express.Router()
var Bilda = require('../Bilda')

/* GET home page. */
router.post('/create_collection', function(req, res, next) {
  let bilda = new Bilda();

  var name = req.body.name
  var fields = req.body.fields
  var reponseOfBilda = bilda.createCollection(name, fields);
  reponseOfBilda.then(r => {
    console.log(r)
    if(r.status === 204){
      res.json({message: "Creado"})  
    } else{
      console.log(r.response.status)
      res.json({message: "Revisa tu configuracion"})
    }
  })
  
});

router.post('/clicked', (req, res, next)=>{
    let site_id = req.body.id
    let field_id = req.body.field
    let bilda = new Bilda(site_id);
    
    // bilda.getNumber(site_id).then(r => {
    //   if(r.status === 200){
    //     res.json({message: r.data.values})  
    //   }

    // });
    bilda.sumActionU(field_id);
    
});

module.exports = router;

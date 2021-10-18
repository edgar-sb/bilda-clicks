var axios = require('axios')

class Bilda {
    token = null

    constructor(token){
        this.token = token
    }

    async createCollection(name, fields){
        var data = JSON.stringify({
            "name": name,
            "customer_lock": "unlocked",
            "fields": fields,
            "external_details": {
              "enabled": "false"
            }
          });
          
          var config = {
            method: 'post',
            url: 'https://api.duda.co/api/sites/multiscreen/14557a2c/collection',
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json', 
              'Authorization': this.token
            },
            data : data
          };
          
         return await axios(config).then( res => {return res.data}).catch(e => {return e});

    }
}

module.exports =  Bilda;
var axios = require('axios')

class Bilda {
  site_id = null

  constructor(site_id){
    this.site_id = site_id
  }

  async createCollection(name, fields) {
    var data = {
      "name": name,
      "customer_lock": "unlocked",
      "fields": fields,
      "external_details": {
        "enabled": "false"
      }
    };

    var config = {
      method: 'post',
      url: 'https://api.duda.co/api/sites/multiscreen/14557a2c/collection',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Basic ZDIzOTYwYmY1MTpaRnlqQTVzVzdYSW8="
      },
      data: data
    };

    let response = await axios(config).then(res => { return res }).catch(e => { return e });
    return response;
  }


  async sumActionU(find) {
    this.getNumber(this.site_id).then(res=> {
      this.findField(res.data.values, find)
    })
  }

  async plus(id){
    var data = JSON.stringify([
      {
        "id": id,
        "data": {
          
        }
      }
    ]);
    
    var config = {
      method: 'put',
      url: 'https://api.duda.co/api/sites/multiscreen/14557a2c/collection/publishing/row',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Authorization': 'Basic ZDIzOTYwYmY1MTpaRnlqQTVzVzdYSW8='
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  async getNumber(site_id) {
    var config = {
      method: 'get',
      url: `https://api.duda.co/api/sites/multiscreen/${site_id}/collection/clicks`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ZDIzOTYwYmY1MTpaRnlqQTVzVzdYSW8='
      }
    };

    let clicks = await axios(config)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return error
      });

      return clicks
  }

  findField(arr, search){
    if(arr !== null && arr !== undefined){
      arr.map(i => {
        if (i.id === search){
          let clicks = i.data.click
          this.plus()
        }
      });
    }
  }
}

module.exports = Bilda;
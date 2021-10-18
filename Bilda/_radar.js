module.exports = class {
    
    constructor(param){
        var params = ""
        if (param) {
            params = param
        } else{
            params = ""
        }
        this.params = params
        return params
    }

    logger(){
        console.log(this.params);
    }


}
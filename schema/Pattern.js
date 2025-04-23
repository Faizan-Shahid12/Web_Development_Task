const mongoose = require("mongoose")

const PatternSchema = new mongoose.Schema({
    pid: String ,
    ln:  Number , 
    rtdir: String , 
    pt: 
    [{
      seq: Number,
      lat: Number,
      lon: Number,
      typ: String,
      stpid: String,
      stpnm: String,
      pdist: Number
    }] 

});

var Pattern = new mongoose.model('Pattern',PatternSchema)

module.exports = Pattern

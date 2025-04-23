const mongoose = require("mongoose")

const StopSchema = new mongoose.Schema({
   
   stpid: String,
   stpnm: String,
   lat: Number,
   lon: Number,

})

var Stop = new mongoose.model('Stop',StopSchema)

module.exports = Stop

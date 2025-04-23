const mongoose = require("mongoose")

const VehicleSchema = new mongoose.Schema({
   
    vid: Number,
    tmstmp: String,
    lat: Number,
    lon: Number,
    hdg: Number,
    pid: Number,
    rt: String,
    des: String,
    pdist: Number,
    dly: Boolean,
    tatripid: String,
    tablockid: String,
    origtatripno: String,
    zone: { type: String, default: null },
    mode: Number,
    psgld: String,
    stst: Number,
    stsd: Date

})

var Vehicle = new mongoose.model('Vehicle',VehicleSchema)

module.exports = Vehicle

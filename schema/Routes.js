const mongoose = require("mongoose")

var RouteSchema = new mongoose.Schema({

    rt: String,
    rtnm: String,
    rtclr: String,
    rtdd: String
});

var Routes = new mongoose.model('Route',RouteSchema)

module.exports = Routes

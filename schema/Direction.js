const mongoose = require("mongoose")

const DirectionSchema = new mongoose.Schema({
   
   id: String,
   name: String

})

var Direction = new mongoose.model('Direction',DirectionSchema)

module.exports = Direction

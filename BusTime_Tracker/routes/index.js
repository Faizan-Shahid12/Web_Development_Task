var express = require('express');
var router = express.Router();

var Vehicle = require("../schema/Vehicle")

var Routes = require("../schema/Routes");

var Direction = require('../schema/Direction');

var Stop = require("../schema/Stop")

var Pattern = require("../schema/Pattern")

/* GET home page. */
router.get('/', async function(req, res, next) 
{
  
  VehicleData()
  RoutesData()
  DirectionData()
  StopData()
  PatternData()
  
  res.send("The Values have been loaded and stored")
});

async function VehicleData()
{
  let response = await fetch(
    "https://ctabustracker.com/bustime/api/v3/getvehicles?key=mMyphiiTdRckeGxemRLzJUFCZ&rt=20&format=json"
  );

  let data = await response.json()

  let vehicles = data["bustime-response"].vehicle;

  await Vehicle.deleteMany();

  await Vehicle.insertMany(vehicles);
    
}

async function RoutesData()
{
  
  let response = await fetch(
    "https://ctabustracker.com/bustime/api/v3/getroutes?key=mMyphiiTdRckeGxemRLzJUFCZ&format=json"
  );

  let data1 = await response.json()

  let Route = data1["bustime-response"].routes;

  await Routes.deleteMany();

  await Routes.insertMany(Route);
}

async function DirectionData()
{

  let response = await fetch(
    "https://ctabustracker.com/bustime/api/v3/getdirections?key=mMyphiiTdRckeGxemRLzJUFCZ&rt=20&format=json"
  );

  let data1 = await response.json()

  let Directions = data1["bustime-response"].directions;

  await Direction.deleteMany();

  await Direction.insertMany(Directions);

}

async function StopData()
{
  
  let response = await fetch(
    "https://ctabustracker.com/bustime/api/v3/getstops?key=mMyphiiTdRckeGxemRLzJUFCZ&rt=7&dir=Eastbound&format=json"
  );

  let data1 = await response.json()

  let Stops = data1["bustime-response"].stops;

  await Stop.deleteMany();

  await Stop.insertMany(Stops);

}

async function PatternData()
{

  let response = await fetch(
    "https://ctabustracker.com/bustime/api/v3/getpatterns?key=mMyphiiTdRckeGxemRLzJUFCZ&rt=20&pid=954&format=json"
  );

  let data1 = await response.json()

  let Patterns = data1["bustime-response"].ptr;

  await Pattern.deleteMany();

  await Pattern.insertMany(Patterns);
}


module.exports = router;

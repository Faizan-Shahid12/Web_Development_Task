var express = require('express');
var router = express.Router();

var Vehicle = require("../schema/Vehicle")


router.get('/Print', async function (req, res)
{
  
  const vehicles = await Vehicle.find();
  
  if (!vehicles)
  {
      return res.status(404).json({ error: 'Vehicle not found' });
  }
  
  res.json(vehicles);
 
});

router.get('/find/:vid', async function (req, res) 
{
  
   let query = { vid: parseInt(req.params.vid) };

   const vehicles = await Vehicle.findOne(query);
  
   if (!vehicles)
   {
       return res.status(404).json({ error: 'Vehicle not found' });
   }
   
   res.json(vehicles);
});

router.post('/add', async function (req, res) 
{

    const newVehicle = new Vehicle(req.body);
    await newVehicle.save();
    res.status(201).json(newVehicle);
  
});

router.put('/Update/:vid', async function(req, res)
{
  
    let query = { vid: parseInt(req.params.vid) };

    const updatedVehicle = await Vehicle.findOneAndUpdate(query, req.body, {new: true});

    if (!updatedVehicle)
    {
       return res.status(404).json({ error: 'Vehicle not found' });
    }

    res.json(updatedVehicle);
  
});

router.delete('/Delete/:vid', async function(req, res)
{
  
    let query = { vid: parseInt(req.params.vid) };
    
    const deletedVehicle = await Vehicle.findOneAndDelete(query);

    if (!deletedVehicle) 
    {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json({ message: 'Vehicle deleted' });

});


module.exports = router;

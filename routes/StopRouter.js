var express = require('express');
var router = express.Router();

var Stop = require("../schema/Stop")


router.get('/Print', async function (req, res)
{

    const Stops = await Stop.find();
  
    if (!Stops)
    {
        return res.status(404).json({ error: 'Stop not found' });
    }
    
    res.json(Stops);
   
 
});

router.get('/find/:stpid', async function (req, res) 
{
  
   let query = { stpid: req.params.stpid};

   const Stops = await Stop.findOne(query);
  
   if (!Stops)
   {
       return res.status(404).json({ error: 'Stop not found' });
   }
   
   res.json(Stops);
});

router.post('/add', async function (req, res) 
{

    const newStop = new Stop(req.body);
    await newStop.save();
    res.status(201).json(newStop);
  
});

router.put('/Update/:stpid', async function(req, res)
{
  
    let query = { stpid: req.params.stpid};

    const updatedStop = await Stop.findOneAndUpdate(query, req.body, {new: true});

    if (!updatedStop)
    {
       return res.status(404).json({ error: 'Stop not found' });
    }

    res.json(updatedStop);
  
});

router.delete('/Delete/:stpid', async function(req, res)
{
  
    let query = { stpid: req.params.stpid };
    
    const Stops = await Stop.findOneAndDelete(query);

    if (!Stops) 
    {
      return res.status(404).json({ error: 'Stop not found' });
    }
    res.json({ message: 'Stops deleted' });

});


module.exports = router;

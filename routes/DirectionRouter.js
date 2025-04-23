var express = require('express');
var router = express.Router();

var Direction = require("../schema/Direction")


router.get('/Print', async function (req, res)
{

    const Directions = await Direction.find();
  
    if (!Directions)
    {
        return res.status(404).json({ error: 'Direction not found' });
    }
    
    res.json(Directions);
   
 
});

router.get('/find/:id', async function (req, res) 
{
  
   let query = { id: req.params.id};

   const Directions = await Direction.findOne(query);
  
   if (!Directions)
   {
       return res.status(404).json({ error: 'Direction not found' });
   }
   
   res.json(Directions);
});

router.post('/add', async function (req, res) 
{

    const newDirection = new Direction(req.body);
    await newDirection.save();
    res.status(201).json(newDirection);
  
});

router.put('/Update/:id', async function(req, res)
{
  
    let query = { id: req.params.id};

    const updatedDirection = await Direction.findOneAndUpdate(query, req.body, {new: true});

    if (!updatedDirection)
    {
       return res.status(404).json({ error: 'Direction not found' });
    }

    res.json(updatedDirection);
  
});

router.delete('/Delete/:id', async function(req, res)
{
  
    let query = { id: req.params.id };
    
    const Directions = await Direction.findOneAndDelete(query);

    if (!Directions) 
    {
      return res.status(404).json({ error: 'Direction not found' });
    }
    res.json({ message: 'Directions deleted' });

});


module.exports = router;

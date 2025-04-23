var express = require('express');
var router = express.Router();

var Routes = require("../schema/Routes")


router.get('/Print', async function (req, res)
{

    const Route = await Routes.find();
  
    if (!Route)
    {
        return res.status(404).json({ error: 'Routes not found' });
    }
    
    res.json(Route);
   
 
});

router.get('/find/:rt', async function (req, res) 
{
  
   let query = { rt: req.params.rt};

   const Route = await Routes.findOne(query);
  
   if (!Route)
   {
       return res.status(404).json({ error: 'Routes not found' });
   }
   
   res.json(Route);
});

router.post('/add', async function (req, res) 
{

    const newRoutes = new Routes(req.body);
    await newRoutes.save();
    res.status(201).json(newRoutes);
  
});

router.put('/Update/:rt', async function(req, res)
{
  
    let query = { rt: req.params.rt};

    const updatedRoutes = await Routes.findOneAndUpdate(query, req.body, {new: true});

    if (!updatedRoutes)
    {
       return res.status(404).json({ error: 'Routes not found' });
    }

    res.json(updatedRoutes);
  
});

router.delete('/Delete/:rt', async function(req, res)
{
  
    let query = { rt: req.params.rt };
    
    const Route = await Routes.findOneAndDelete(query);

    if (!Route) 
    {
      return res.status(404).json({ error: 'Routes not found' });
    }
    
    res.json({ message: 'Route deleted' });

});


module.exports = router;

var express = require('express');
var router = express.Router();

var Pattern = require("../schema/Pattern")


router.get('/Print', async function (req, res)
{

    const Patterns = await Pattern.find();
  
    if (!Patterns)
    {
        return res.status(404).json({ error: 'Pattern not found' });
    }
    
    res.json(Patterns);
   
});

router.get('/find/:pid', async function (req, res) 
{
  
   let query = { pid: req.params.pid};

   const Patterns = await Pattern.findOne(query);
  
   if (!Patterns)
   {
       return res.status(404).json({ error: 'Pattern not found' });
   }
   
   res.json(Patterns);
});

router.post('/add', async function (req, res) 
{

    const newPattern = new Pattern(req.body);
    await newPattern.save();
    res.status(201).json(newPattern);
  
});

router.put('/Update/:pid', async function(req, res)
{
  
    let query = { pid: req.params.pid};

    const updatedPattern = await Pattern.findOneAndUpdate(query, req.body, {new: true});

    if (!updatedPattern)
    {
       return res.status(404).json({ error: 'Pattern not found' });
    }

    res.json(updatedPattern);
  
});

router.delete('/Delete/:pid', async function(req, res)
{
  
    let query = { pid: req.params.pid };
    
    const Patterns = await Pattern.findOneAndDelete(query);

    if (!Patterns) 
    {
      return res.status(404).json({ error: 'Pattern not found' });
    }
    res.json({ message: 'Patterns deleted' });

});


module.exports = router;

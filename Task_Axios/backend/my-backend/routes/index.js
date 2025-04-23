const express = require('express');
const axios = require('axios'); 
const router = express.Router();

// Route to fetch data from the external API
router.get('/api/data', async function(req, res, next) {
  try {
    const response = await axios.get('https://fake-json-api.mock.beeceptor.com/users');
    const data = response.data; 

    res.json(data);
  } catch (error) {
    console.error('Error fetching data from the external API:', error);
    res.status(500).json({ message: 'Error fetching data' }); // Handle any errors
  }
});

module.exports = router;

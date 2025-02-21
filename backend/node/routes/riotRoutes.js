const express = require('express');
const router = express.Router();
const axios = require('axios');

const RIOT_API_KEY = 'RGAPI-3882ba01-2c9f-4404-ba7a-7495fd13a098';

router.get('/stats/:playerId', async (req, res) => {
  try {
    const playerId = req.params.playerId;
    // Replace REGION and endpoint with real Riot API details
    const response = await axios.get(`https://REGION.api.riotgames.com/lol/some-endpoint/${playerId}`, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching Riot stats' });
  }
});

module.exports = router;

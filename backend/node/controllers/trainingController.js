const axios = require('axios');
const DEEPSEEK_AI_KEY = 'sk-78d3ec8c43c84b2faaf3b99ead35b2a3';

exports.analyzeGameplay = async (req, res) => {
  try {
    const { userId } = req.body;
    const aiResponse = await axios.post('https://api.deepseek.ai/analyze', {
      userId,
      matchData: { kills: 10, deaths: 2, accuracy: 45 }
    }, {
      headers: { 'Authorization': `Bearer ${DEEPSEEK_AI_KEY}` }
    });

    res.json({
      analysis: aiResponse.data,
      recommendedTraining: {
        aimDrills: '10 minutes Aim Lab flick shots',
        movementDrills: '5 minutes OSU tracking practice',
        notes: 'Focus on crosshair placement and reaction time.'
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error analyzing gameplay' });
  }
};

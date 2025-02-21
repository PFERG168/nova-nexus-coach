const express = require('express');
const router = express.Router();

router.get('/liveData', (req, res) => {
  res.json({ message: 'Marvel Rivals live data fetched successfully' });
});

module.exports = router;

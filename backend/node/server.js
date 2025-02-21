const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Import routes and controllers
const riotRoutes = require('./routes/riotRoutes');
const fortniteRoutes = require('./routes/fortniteRoutes');
const marvelRivalsRoutes = require('./routes/marvelRivalsRoutes');
const trainingController = require('./controllers/trainingController');
const debugController = require('./controllers/debugController');

app.use(bodyParser.json());

// Basic user route for testing
app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({
    id: userId,
    username: 'DarkLordGamer',
    current_game: 'Valorant'
  });
});

// Mount additional routes
app.use('/api/riot', riotRoutes);
app.use('/api/fortnite', fortniteRoutes);
app.use('/api/marvel', marvelRivalsRoutes);

// Training route
app.post('/api/training/analyze', trainingController.analyzeGameplay);

// Debug route for testing
app.get('/api/debug', debugController.testDebug);

app.listen(port, () => {
  console.log(`Node server running on http://localhost:${port}`);
});

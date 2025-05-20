const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const registerRoute = require('./routes/register');

const app = express();
const PORT = process.env.PORT || 5010;

// CORS options
const corsOptions = {
  origin: 'https://empowerspeech.netlify.app',
  methods: ['GET', 'POST'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Route for handling registration submissions and retrieval
app.use('/api/register', registerRoute);

// Root route
app.get('/', (req, res) => {
  res.send('Speech Camp Backend is running');
});

// Serve the raw JSON file of registrations (download/view)
app.get('/api/registrations', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'registrations.json');

  // Check if the file exists
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ message: 'No registrations found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});

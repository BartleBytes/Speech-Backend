const express = require('express');
const cors = require('cors');
const registerRoute = require('./routes/register');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5010;

const corsOptions = {
    origin: 'https://empowerspeech.netlify.app',
    methods: ['GET', 'POST'],
    credentials: true
};


app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/register', registerRoute);

app.get('/', (req, res) => {
    res.send('Speech Camp Backend is running');
  });
  
app.get('/api/registrations', (req, res) => {
  const filePath = path.join(__dirname, 'data', registrations.json)
  res.sendFile(filePath)
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

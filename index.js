const express = require('express');
const cors = require('cors');
const registerRoute = require('./routes/register');

const app = express();
const PORT = process.env.PORT || 5010;

app.use(cors());
app.use(express.json());

app.use('/api/register', registerRoute);

app.get('/', (req, res) => {
    res.send('Speech Camp Backend is running');
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

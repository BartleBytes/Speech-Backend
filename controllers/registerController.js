const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/registrations.json');

function handleRegistration(req, res) {
  const registration = req.body;

  // Read existing data
  let registrations = [];
  if (fs.existsSync(dataPath)) {
    const file = fs.readFileSync(dataPath);
    registrations = JSON.parse(file);
  }

  // Add new registration
  registrations.push(registration);

  // Save back to file
  fs.writeFileSync(dataPath, JSON.stringify(registrations, null, 2));

  res.status(200).json({ message: 'Registration saved!' });
}

module.exports = { handleRegistration };
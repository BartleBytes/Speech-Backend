const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/registrations.json');

function handleRegistration(req, res) {
  const registration = req.body;

  if (!registration.childName || !registration.age || !registration.parentName || !registration.email) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  registration.submittedAt = new Date().toISOString();

  let registrations = [];
  if (fs.existsSync(dataPath)) {
    const file = fs.readFileSync(dataPath);
    registrations = JSON.parse(file);
  }

  registrations.push(registration);
  fs.writeFileSync(dataPath, JSON.stringify(registrations, null, 2));

  res.status(200).json({ message: 'Registration saved!' });
}

function getRegistrations(req, res) {
  if (fs.existsSync(dataPath)) {
    const file = fs.readFileSync(dataPath);
    const registrations = JSON.parse(file);
    res.status(200).json(registrations);
  } else {
    res.status(404).json({ message: 'No registrations found' });
  }
}

module.exports = {
  handleRegistration,
  getRegistrations,
};

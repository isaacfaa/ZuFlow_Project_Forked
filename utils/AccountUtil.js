const { Resource } = require('../models/Resource');
const fs = require('fs').promises;

async function readJSON(filename) {
  try {
      const data = await fs.readFile(filename, 'utf8');
      return JSON.parse(data);
  } catch (err) { console.error(err); throw err; }
}
async function writeJSON(object, filename) {
  try {
      const allObjects = await readJSON(filename);
      allObjects.push(object);
      await fs.writeFile(filename, JSON.stringify(allObjects), 'utf8');
      return allObjects;
  } catch (err) { console.error(err); throw err; }
}

async function addAccount(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    if (!email.includes('@') || !email.includes('.')) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    const newResource = new Resource(name, email, password);
    const updatedResources = await writeJSON(newResource, 'utils/resources.json');
    return res.status(201).json({ message: 'Account created successfully', data: updatedResources });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    if (!email.includes('@') || !email.includes('.')) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    const allResources = await readJSON('utils/resources.json');
    const account = allResources.find(resource => resource.email === email && resource.password === password);
    if (account) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  readJSON, writeJSON, addAccount, login
};

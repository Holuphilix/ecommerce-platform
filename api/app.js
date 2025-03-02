// api/app.js

const express = require('express');
const app = express();

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.status(200).send('Hello, World!');
});

// Example API route
app.post('/api/some-endpoint', (req, res) => {
  res.status(201).send('Data created successfully');
});

module.exports = app; // Export the app to be used in the test file

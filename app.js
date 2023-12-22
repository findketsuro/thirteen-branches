const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'thirteen-branches' directory
app.use(express.static(path.join(__dirname, 'thirteen-branches')));

// Send the main HTML file when the root route is accessed
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '13支-01157108+01157103.html'));
  res.sendFile(path.join(__dirname, 'imgs'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

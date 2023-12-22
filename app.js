const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'thirteen-branches')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '13支-01157108+01157103.html'));
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

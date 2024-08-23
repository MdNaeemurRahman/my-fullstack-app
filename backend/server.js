const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Basic API route
app.get('/api', (req, res) => {
  res.send('Hello from the Node.js API');
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});

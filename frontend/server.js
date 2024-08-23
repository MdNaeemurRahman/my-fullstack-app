const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Proxy API requests to the backend
app.use('/api', (req, res) => {
  res.redirect('http://localhost:3000/api');
});

app.listen(port, () => {
  console.log(`Frontend server running on http://localhost:${port}`);
});

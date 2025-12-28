// Simple static server for the 3d directory
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Force .js files to be served as application/javascript for ES modules
app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.type('application/javascript');
  }
  next();
});
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`3d static server running at http://localhost:${PORT}/index.html`);
});

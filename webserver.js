// const express=require('express'),app=express();app.use(express.static('web'));app.listen(3000);
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory (where your Agar.io frontend is)
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve the main HTML file (if you don't have one, create an index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Cigar2 Agar.io client running on port ${port}`);
});

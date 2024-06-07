// Create web server
const express = require('express');
const app = express();

// Import module
const comments = require('./comments');

// Path: /comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Path: /comments/:id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  res.json(comments.getComment(id));
});

// Start server
app.listen(3000, () => {
  console.log('Server started');
});

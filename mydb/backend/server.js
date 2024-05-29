// server.js

const express = require('express');
const app = express();

// Health check route
app.get('/api/status', (req, res) => {
    res.send("Server is running");
});

// Sample API route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Vercel!' });
});

module.exports = app;

// server.js

const express = require('express');
const admin = require('./config/firebase-admin-config');
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/', indexRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// server.js

const express = require("express");
const indexRouter = require("./routes/index");
const DBClient = require("./utils/db");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// cors fong
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Routes
app.use("/", indexRouter);

const dbClient = new DBClient();
dbClient.connect().catch((err) => {
  console.error("Failed to connect to MongoDB", err);
  process.exit(1);
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

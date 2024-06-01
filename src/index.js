// src/index.js
const mongoose = require("mongoose");
const app = require("./app");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Ensure that the HTML file is served correctly
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
mongoose.set("debug", true);

// MongoDB connection using the URI from .env file
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error", err);
    process.exit(1); // Exit the process with an error
  });

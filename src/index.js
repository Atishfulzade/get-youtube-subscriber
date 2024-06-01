// Import necessary modules and dependencies
const mongoose = require("mongoose"); // Mongoose for MongoDB interactions
const app = require("./app"); // Express application instance
const path = require("path"); // Path module for working with file and directory paths
require("dotenv").config(); // Load environment variables from .env file

// Define the port to be used by the server, defaulting to 3000 if not specified in environment variables
const PORT = process.env.PORT || 3000;

// Define a route to serve the HTML file for the API documentation
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html")); // Send index.html file from the public directory
});

// Connect to MongoDB using the URI from the environment variables
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, // Use the new MongoDB connection string parser
    useUnifiedTopology: true, // Use the new MongoDB topology engine
    serverSelectionTimeoutMS: 5000, // Set the timeout for server selection
    socketTimeoutMS: 45000, // Set the timeout for socket inactivity
  })
  .then(() => {
    console.log("Connected to MongoDB"); // Log successful connection to MongoDB
    // Start the Express server and listen on the specified port
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`); // Log that the server is running
    });
  })
  .catch((err) => {
    console.error("Database connection error", err); // Log any errors connecting to MongoDB
    process.exit(1); // Exit the process with a failure code (1) if there's an error
  });

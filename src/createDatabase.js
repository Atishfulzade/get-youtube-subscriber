// Import necessary modules and dependencies
const mongoose = require("mongoose"); // Mongoose for MongoDB interactions
const Subscriber = require("./models/subscribers"); // Subscriber model
require("dotenv").config(); // Load environment variables from .env file
const data = require("./data"); // Sample data to populate the database

// Connect to MongoDB using the URI from environment variables
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database connected"); // Log successful connection

    // Drop the existing database to start fresh
    await mongoose.connection.db.dropDatabase();

    // Insert sample data into the Subscriber collection
    await Subscriber.insertMany(data);
    console.log("Subscribers added"); // Log successful data insertion

    // Close the database connection
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Database connection error", err); // Log connection error
    process.exit(1); // Exit process with failure code
  });

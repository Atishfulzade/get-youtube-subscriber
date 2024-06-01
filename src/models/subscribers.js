const mongoose = require("mongoose");

// Define the schema for a Subscriber
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
  },
  subscribedChannel: {
    type: String,
    required: true, // Subscribed channel is required
  },
  subscribedDate: {
    type: Date,
    required: true, // Subscribed date is required
    default: Date.now, // Default value is the current date and time
  },
});

// Export the model based on the schema
module.exports = mongoose.model("Subscriber", subscriberSchema);

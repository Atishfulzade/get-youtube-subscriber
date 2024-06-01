// src/createDatabase.js
const mongoose = require("mongoose");
const Subscriber = require("./models/subscribers");
require("dotenv").config();
const data = require("./data");
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database connected");
    await mongoose.connection.db.dropDatabase();

    await Subscriber.insertMany(data);
    console.log("Subscribers added");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Database connection error", err);
    process.exit(1);
  });

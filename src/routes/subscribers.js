// src/routes/subscribers.js
const express = require("express");
const Subscriber = require("../models/subscribers");
const router = express.Router();

// GET all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    console.error("Error fetching subscribers:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET subscribers with only name and subscribedChannel fields
router.get("/names", async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, "name subscribedChannel");
    res.json(subscribers);
  } catch (err) {
    console.error("Error fetching subscriber names:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// GET subscriber by ID
router.get("/:id", async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Subscriber not found" });
    }
    res.json(subscriber);
  } catch (err) {
    console.error("Error fetching subscriber by ID:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

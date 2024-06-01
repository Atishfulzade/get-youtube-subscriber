// src/app.js
const express = require("express");
const subscribersRouter = require("./routes/subscribers");
const app = express();

app.use(express.json());
app.use("/subscribers", subscribersRouter);

module.exports = app;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db_string = "mongodb://localhost:27107";
const connection = mongoose.connect(db_string);
const PORT = 3000;

app.use("/schools", schoolRouter);

app.all("*", (req, res, next) => {
  res.status(404);
  next(new Error(`Route ${req.url} not found`));
});

app.use((err, req, res, next) => {
  res.status(err.status);
  res.json({ error: err.message });
});

app.listen(PORT, () => console.log(`backend listening to ${PORT}`));
process.on("exit", () => connection.close());

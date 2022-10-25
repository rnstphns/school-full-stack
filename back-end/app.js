const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db_string = "mongodb://localhost:27017";
const connection = mongoose.connect(db_string, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const schoolRouter = require("./routers/schoolRouter");
const PORT = 3000;

app.use("/schools", schoolRouter);

app.all("*", (req, res, next) => {
  res.status(404);
  next(new Error(`Route '${req.url}' not found`));
});

app.use((err, req, res, next) => {
  if (res.status === undefined) res.status(500);
  res.json({ error: err.message });
});

app.listen(PORT, () => console.log(`backend listening to ${PORT}`));
process.on("exit", () => connection.close());

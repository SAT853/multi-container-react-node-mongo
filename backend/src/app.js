require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const routes = require("./routes/routes");

const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== "test") {
  connectDB();
}

// cors
app.use(cors({ origin: true, credentials: true }));

// for testing purposes
app.get("/test", (req, res) => {
  res.status(200).send({ text: "Simple Node App Working!" });
});

routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;

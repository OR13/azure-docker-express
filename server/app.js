"use strict";

const express = require("express");
const registerEndpoints = require("./src/key-vault/endpoints");

// Constants
const PORT = 3001;
const HOST = "0.0.0.0";

// App
const app = express();
app.use(require("body-parser").json());

const moment = require("moment");

const BASE_URL = process.env.APP_BASE_URL;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.json({
    now: moment().format("LLL"),
    boss: process.env.BOSS
  });
});

registerEndpoints(app);

if (!module.parent) {
  app.listen(PORT, HOST);
}
console.log(`Running on http://${HOST}:${PORT}`);
module.exports = app;

const express = require("express");
const reserveRouter = express.Router();
var path = require("path");

//applying data//

// const reservationData = require("../lib/reservation");
// const waitListData = require('../lib/waitlistData')

reserveRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "reserve.html"));
});

module.exports = reserveRouter;

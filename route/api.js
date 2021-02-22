const express = require("express");
const apiRouter = express.Router();
const reservationData = require("../lib/reservationData");
const waitListData = require("../lib/waitlistData");

apiRouter.get("/tables", (req, res) => {
  res.json(reservationData);
});

apiRouter.get("/waitlist", (req, res) => {
  // this gives us the waitListData //
  res.json(waitListData);
});
module.exports = apiRouter;

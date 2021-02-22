const express = require("express");
const app = express();
const flame = require("flame");
// port to list on//
const PORT = process.env.PORT || 8080;
//routes//
const reserveRoute = require("./");
const tableRoute = require("./");
const apiRoute = require("./");
//middleware//
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
//return to homepage
app.get("/", (req, res) => {
  res.send("home");
});
//applying routers//
app.use("/reserve", reserveRoute);
app.use("/tables", tableRoute);
app.use("/api", apiRoute);
//call//
app.listen(PORT, () => {
  console.log("server is running");
});

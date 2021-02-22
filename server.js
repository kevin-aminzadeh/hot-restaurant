const express = require("express");
const app = express();
const flame = require("flame");
var tables = require('./data/tables');
var waitlist = require('./data/waitlist');
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

app.get('/api/tables',(req,res) => res.json(tables));
app.get('/api/waitlist',(req,res) => res.json(waitlist));
//call//
app.listen(PORT, () => {
  console.log("server is running");
});

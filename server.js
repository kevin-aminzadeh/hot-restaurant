const express = require("express");
const app = express();

// port to list on//
const PORT = process.env.PORT || 8080;

//routes//

const routes = [
  { path: "/", file: "home.html" },
  { path: "/reserve", file: "reserve.html" },
];

const reserveRoute = require("./route/reserve");
// const tableRoute = require("./route/table");
// const apiRoute = require('./')

//middleware//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//return to homepage

app.get("/", (req, res) => {
  res.send("home");
});

//applying routers//

app.use("/reserve", reserveRoute);
// app.use("/tables", tableRoute);
// app.use("/api", apiRoute);

//call//
app.listen(PORT, () => {
  console.log("server is running");
});

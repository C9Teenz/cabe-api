const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "Hallo World!!!" });
});
const userRoute = require("./user");
route.use("/user", userRoute);
module.exports = route;

const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "Hallo World!!!" });
});
const userRoute = require("./user");
const categoryRoute = require("./category");
route.use("/user", userRoute);
route.use("/categories", categoryRoute);
module.exports = route;

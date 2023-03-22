const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
  res.json({ message: "Hallo World!!!" });
});
const userRoute = require("./user");
const categoryRoute = require("./category");
const chiliRoute = require("./chili");
route.use("/user", userRoute);
route.use("/categories", categoryRoute);
route.use("/chilies", chiliRoute);
module.exports = route;

const { Router } = require("express");
const chiliRoute = Router();
const multer = require("multer");
const path = require("path");
const ChiliController = require("../controllers/chili_controller");
const upload = multer({ dest: "uploads/" });

chiliRoute.post("/create", upload.single("image"), ChiliController.create);
chiliRoute.get("/", ChiliController.get);
chiliRoute.get("/delete/:id", ChiliController.delete);
chiliRoute.put("/edit/:id", ChiliController.edit);
module.exports = chiliRoute;

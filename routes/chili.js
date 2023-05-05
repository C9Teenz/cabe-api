const { Router } = require("express");
const chiliRoute = Router();
const multer = require("multer");
const path = require("path");
const ChiliController = require("../controllers/chili_controller");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

chiliRoute.post("/create", upload.single("image"), ChiliController.create);
chiliRoute.get("/", ChiliController.get);
chiliRoute.get("/delete/:id", ChiliController.delete);
chiliRoute.put("/edit/:id", upload.single("image"), ChiliController.edit);
module.exports = chiliRoute;

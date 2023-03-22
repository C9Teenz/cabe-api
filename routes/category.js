const { Router } = require("express");
const CategoryController = require("../controllers/category_controller");
const categoryRoute = Router();
categoryRoute.get("/", CategoryController.get);
categoryRoute.post("/create", CategoryController.create);
categoryRoute.put("/edit/:id", CategoryController.edit);
categoryRoute.get("/delete/:id", CategoryController.delete);
module.exports = categoryRoute;

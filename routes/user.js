const { Router } = require("express");
const userRoute = Router();
const userCon = require("../controllers/user_controller");
userRoute.get("/", userCon.me);
userRoute.post("/register", userCon.register);
userRoute.post("/login", userCon.login);

module.exports = userRoute;

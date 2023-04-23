const express = require("express");
const userAuthController = require("../controllers/user.auth.controller");
const userAuthRouter = express.Router({
  //  mergeParams: true
});

userAuthRouter.post("/login", userAuthController.loginUser);
userAuthRouter.post("/register", userAuthController.registerUser);
userAuthRouter.post("/logout", userAuthController.logoutUser);

module.exports = userAuthRouter;

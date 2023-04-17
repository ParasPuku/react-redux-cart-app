const express = require("express");
const cartController = require("../controllers/cart.controller");
const cartRouter = express.Router({});

cartRouter.post("/create-cart", cartController.createCart);
cartRouter.get("/get-cart", cartController.getCart);
cartRouter.post("/add-to-cart", cartController.addToCart);
cartRouter.put("/remove-cart/:id", cartController.removeCart);

module.exports = cartRouter;

const express = require("express");
const bodyParser = require("body-parser");
const cartRoute = require("./routes/cart.router");
const path = require("path");

const app = express();
app.use(
  bodyParser.json({
    limit: "2mb",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/cart", cartRoute);

app.get("*", (req, res) => {
  res.contentType("text/html");
  res.sendFile(path.join(__dirname, "../", "dist/index.html"));
});

module.exports = app;

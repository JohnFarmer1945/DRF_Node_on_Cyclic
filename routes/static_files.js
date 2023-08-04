var express = require("express");
var router = express.Router();

// Routes to all static files
router.get("/", function (req, res) {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  res.render("start");
});

router.get("/Start", function (req, res) {
  var URL = String(req.originalUrl).substring(1);
  res.render("start", { title: URL });
});

router.get("/Team", function (req, res) {
  var URL = String(req.originalUrl).substring(1);
  res.render("team", { title: URL });
});

-router.get("/Technik", function (req, res) {
  var URL = String(req.originalUrl).substring(1);
  res.render("technik", { title: URL });
});

router.get("/Umgebung", function (req, res) {
  var URL = String(req.originalUrl).substring(1);
  res.render("umgebung", { title: URL });
});

router.get("/Todos", function (req, res) {
  var URL = String(req.originalUrl).slice(1);
  res.render("todos", { title: URL });
});

router.get("/MoreToDos", function (req, res) {
  var URL = String(req.originalUrl).slice(1);
  res.render("moretodos", { title: URL });
});

router.get("/EmergencyAndProcedure", function (req, res) {
  var URL = String(req.originalUrl).slice(1);
  res.render("emergencyprocedure", { title: URL });
});

router.get("/More", function (req, res) {
  var URL = String(req.originalUrl).slice(1);
  res.render("more", { title: URL });
});

module.exports = router;

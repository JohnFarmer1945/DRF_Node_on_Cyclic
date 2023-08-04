var express = require("express");
var router = express.Router();

// Routes to all static files
router.get("/", function (req, res) {
  res.render("start");
});

router.get("/Start", function (req, res) {
  res.render("start");
});

router.get("/Team", function (req, res) {
  res.render("team");
});
-router.get("/Technik", function (req, res) {
  res.render("technik");
});
router.get("/Umgebung", function (req, res) {
  res.render("umgebung");
});
router.get("/Todos", function (req, res) {
  res.render("todos");
});
router.get("/MoreToDos", function (req, res) {
  res.render("moretodos");
});
router.get("/EmergencyAndProcedure", function (req, res) {
  res.render("emergencyprocedure");
});
router.get("/More", function (req, res) {
  res.render("more");
});

module.exports = router;

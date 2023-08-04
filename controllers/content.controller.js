const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.render("index");
});

// DEFINE CONTEXT PAGES
router.get("/pIndex", (req, res) => {
  res.render("index");
});

router.get("/pTeam", (req, res) => {
  res.render("../team");
});

router.get("/pTechnik", (req, res) => {
  res.render("technik");
});

router.get("/pUmgebung", (req, res) => {
  res.render("umgebung");
});

router.get("/pTodos", (req, res) => {
  res.render("todos");
});

router.get("/pMoreToDos", (req, res) => {
  res.render("moretodos");
});

router.get("/pEmergencyAndProcedure", (req, res) => {
  res.render("emergencyprocedure");
});

router.get("/pMore", (req, res) => {
  res.render("more");
});

module.exports = router;

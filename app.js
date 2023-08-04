// Allgmeine Module
const express = require("express");
const path = require("path");

// Import ownn modules
const routerContent = require("./controllers/content.controller");
var static_files = require("./routes/static_files.js");

// Configure Server
const app = express();
const PORT = process.env.PORT || 3030;

// Configurre Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

// Make use of public files
app.use(express.static("public"));

// Routen
app.use("/", static_files);

// Start server
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

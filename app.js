// Allgmeine Module
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")

const dotenv = require ('dotenv');
const mongoose = require('mongoose');

// Import ownn modules
// TO BE DELETED const routerContent = require("./controllers/content.controller");
var RouterStaticFiles = require("./routes/static_files.js");
var RouterAdmin = require("./routes/admincrud");

// Configure Server
const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test connect to your Atlas cluster
// Replace the following with your Atlas connection string                                                                                                                                        
const uri = "mongodb+srv://johnfarmer:blgofhPFrOwu9N4M@cluster0.lp7kfys.mongodb.net/?retryWrites=true&w=majority";


dotenv.config()

const connectionString = process.env.DB_STRING

const connectToDB = async () => {
  try {
      await mongoose.connect(uri, {
          autoIndex: true
      })
      console.log('Test-Connect to Mongodb Atlas successfull.');

  } catch (error) {
      console.error(error);
  }
}



// Configure Template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));


// Make use of public files
app.use(express.static("public"));



// Routen
app.use("/", RouterStaticFiles);
app.use("/admin", RouterAdmin);

// Start server
console.log(''); 
console.log('********** STARTING SERVER **********');

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Testconnect to database
connectToDB();

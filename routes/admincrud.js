var express = require("express");
var router = express.Router();
const emergencyFlightModel = require('../models/emergencyProcedures')

// Admin Routes
router.get("/", async (request, response) => {
  const emergencyFlightModelRes = await emergencyFlightModel.find({});
  console.log (emergencyFlightModelRes);
});


router.post("/create", async (request, response) => {
  const emergency = new emergencyFlightModel(request.body);
  console.log(emergency);
  
  try {
    await emergency.save();
    response.send(emergency);
  } catch (error) {
    response.status(500).send(error);
  }
});



module.exports = router;

    
   
    

/*
PASTE LATER FOR NAME IN TAB
// Routes to all static files
router.get("/", function (req, res) {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  res.render("adminpage");
});


*/
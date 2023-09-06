var express = require("express");
var router = express.Router();
const emergencyFlightModel = require('../models/emergencyProcedures')

// Admin Routes
router.get("/", async (request, response) => {
  const emergencyFlightModelRes = await emergencyFlightModel.find({});
  emergencyFlightModelResReduced = [];
  counter = 1;

  for (const question of emergencyFlightModelRes) {
    emergencyFlightModelResReduced.push(
      {
        mongo_id : question._id,
        id : counter, 
        name : question.name

      }
    );
    counter +=1
  }
  console.log(emergencyFlightModelResReduced);
  
  response.render("../views/adminpage", {  emergencyFlightModelResReduced : emergencyFlightModelResReduced  });
});


router.get('/delete/:id', deleteAction);

async function deleteAction (request, response) {
  
  const MongoIDFromURLLessDollar = request.params.id.slice(1);
  
  try {
    const questionToBeDeleted = await emergencyFlightModel.findByIdAndDelete(MongoIDFromURLLessDollar);
    response.redirect("/admin");
    if (!questionToBeDeleted) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
}


// Export Modules
module.exports = router;




/*
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
*/    

/*
PASTE LATER FOR NAME IN TAB
// Routes to all static files
router.get("/", function (req, res) {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  res.render("adminpage");
});


*/
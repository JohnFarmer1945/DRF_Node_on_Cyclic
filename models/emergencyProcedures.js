const mongoose = require("mongoose");

const emergencyFlightSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const emergencyFlightModel = mongoose.model("emergencyFlightModel", emergencyFlightSchema);

module.exports = emergencyFlightModel;



/*
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "$id": "https://example.com/employee.schema.json",
    "title": "Record of employee",
    "description": "This document records the details of an employee",
    "type": "object",
    "properties": {
        "id": {
            "description": "A unique identifier for a questiong",
            "type": "string"
        },
        "name": {
            "description": "full name of the question",
            "type": "string",
            "minLength":2
        },
        "comments": {
            "description": "possible comments",
            "type": "string"
        }
    },
    "required": [
        "id",  
        "name"
    ]
}
);

*/



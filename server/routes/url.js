const express = require("express");

// urlRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const urlRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you get a list of all the records.
urlRoutes.route("/url").get(function (req, res) {
  let db_connect = dbo.getDb("AdminInfo");
  db_connect
    .collection("urls")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
urlRoutes.route("/url/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("urls")
      .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
      });
});

// This section will help you create a new record.
urlRoutes.route("/url/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    masterURL: req.body.masterURL,
    dateAdded: Date.now()
  };
  db_connect.collection("urls").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you update a record by id.
urlRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
      masterURL: req.body.masterURL,
      dateAdded: Date.now()
    },  
  }
});

// This section will help you delete a record
urlRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("urls").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = urlRoutes;
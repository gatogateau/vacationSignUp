var express = require("express");
var router = express.Router();
var path = require("path");
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// main page
router.get("/", function (req, res) {
  res.redirect("/burgers");
});


// added handlebars, and removed this route
// // this get route works!!!
// router.get ("/burgers", function (req, res) {
//   burger.all(function(data) {
//     var hbsObject = {burgers: data};
//     console.log(hbsObject);
//     res.sendFile(path.join(__dirname+"/../public/home.html"));
//     // res.render ("home", hbsObject);
//   });
// });


router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});


// commented out after adding handlebars
// router.post ("/burgers/create", function (req, res) {
//   burger.create(req.body.name, function () {
//     res.redirect ("/burgers");
//   });
// });

router.post("/burgers/create", function (req, res) {
  burger.create(
    req.body.burgerName,   function () {
    res.redirect("/burgers")
  });
});

// update burgers table
router.put("/burgers/update/:id", function (req, res) {
// don't think i need the condition
  // var condition = "id = " + req.params.id;
  // console.log("condition", condition);

  burger.update(
    req.params.id, true, function () {
    res.redirect("/burgers");
  });
});



// delete a burger
// need help with this one
router.delete("/burgers/delete/:burgerName", function (req, res) {
  // var condition = "id = " + req.params.burgerName;

  burger.delete(req.params.burgerName, function (result) {
    if (result.affectedRows == 0) {
      // if there is no change in rows, then no ID exists, 404 error
      return res.status(404).end();
    } else {
      res.redirect("/burgers");
      res.status(200).end();
    }
  });
});

module.exports = router;
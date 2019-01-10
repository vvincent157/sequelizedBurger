// Our Burger controller
// =====================
// This file uses Sequelize to manage data manipulation
// for all apropos http requests.
// NOTE: This is the same file from last unit's homework,
// but with each route gutted and replaced with sequelize queries
// where references to our outmoded ORM file once sat.
var express = require("express");

var router = express.Router();
// grabbing our models
var db = require("../models");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/burgers");
});

// get route, edited to match sequelize
router.get("/burgers", function(req, res) {
  // replace old function with sequelize function
  db.Burger.findAll({
    include: [db.Customer],
    // Here we specify we want to return our burgers in ordered by ascending burger_name
    order: [
      ["burger_name", "ASC"]
    ]
  })
  // use promise method to pass the burgers...
    .then(function(dbBurger) {
    // into the main index, updating the page
      var hbsObject = {
        burger: dbBurger
      };
      return res.render("index", hbsObject);
    });
});

router.post("/burgers/create",function(req, res){
db.Burger.create({
  burger_name: req.body.burger_name
    }).then(function(dbBurger){
       res.redirect("/")
    })
})

router.put("/burgers/update",function(req, res){
if (req.body.customer) {
  db.Customer.create({
    customer: req.body.customer,
    burgerId: req.body.burgerId
  }).then(function(dbCustomer){
    return db.Burger.update({
      devoured: true
    },{
      where: {
      id: req.body.burgerId  
      }
    });
  }).then(function(dbBurger){
res.json("/")
  })
} else {
  db.burger.update({
    devoured: true
  },{
    where: {
      id: req.body.burgerId  
      } 
  }).then(function(dbBurger){
    res.json("/")
  })
}
})
module.exports = router;

// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/members");
////    res.json("/editprofile");
  });


  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password,
      nameFirst: req.body.nameFirst,
      nameLast: req.body.nameLast,
      phone_home: req.body.phoneHome,
      phone_cell: req.body.phoneCell,
      date_of_birth: req.body.dateOfBirth
      
    }).then(function() {
      console.log("hello")
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });


  app.put("/api/update", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.User.update({
      nameFirst: req.body.firstName-input,
      nameLast: req.body.nameLast-input
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });



  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/editprofile/:id", function(req, res) {
    db.User.findAll({
        where: {
          id: req.params.id
        }
      }).then(function(results) {
        res.json(results);
        console.log("details",results);
      });

    
  });

  app.get("/api/family", function(req, res) {
    db.Users.findAll({
      include: [db.Calendar.activity_name, db.Calendar.activity_date, db.Calendar.location_street, db.Calendar.location]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  // app.get("/api/activity", function(req, res) {
  //   db.Calendar.findAll({
  //     include: [db.Users.nameFirst, db.Users.nameLast]
  //   }).then(function(dbCalendar) {
  //     res.json(dbCalendar);
  //   });
  // });


  app.get("/api/activity/:id", function(req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Calendar]
    }).then(function(response) {
      
      res.json(dbCalendar);
    });
  });

  app.get("/api/activity/:id", function(req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Calendar]
    }).then(function(response) {
      
      res.json(dbCalendar);
    });
  });
  app.get("/api/:activity_date", function(req, res) {
    db.Calendar.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Users]
    }).then(function(response) {
      
      res.json(dbCalendar);
    });
  });

  // Create a new example
  app.post("/api/addChild/:id", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbExample);
    });
  });
  app.post("/api/addActivity/:id", function(req, res) {
    db.calendar.create(req.body).then(function(dbCalendar) {
      res.json(dbCalendar);
    });
  });

  // Delete an example by id
  app.delete("/api/deleteChild/:id", function(req, res) {
    db.users.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbusers);
    });
  });
  app.delete("/api/deleteActivity/:id", function(req, res) {
    db.calendar.destroy({ where: { id: req.params.id } }).then(function(dbCalendar) {
      res.json(dbCalendar);
    });
  });


  
  app.get("/api/calendar", function(req,res){
    db.Event.findAll({}).then(function(eventData){
      res.json(eventData)
    })
  })

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        
        interests: ["movies", "sports", "fishing"]
      });
    }
  });

};




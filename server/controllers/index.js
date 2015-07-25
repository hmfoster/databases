var models = require('../models');
var bluebird = require('bluebird');
var app = require('express')();
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // for parsing application/json


module.exports = {
  messages: {
    get: function (req, res) {
      // want to get the list of messages

      // invoke models.messages.get function
      // (asynchronous)
      // once we get the response
        // send the result of function as a response 

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("request data:", req.body);
      models.messages.post(req.body);
      // pass the info to model.users.post
      res.send({success: true});
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      models.users.post(req.body);
      // pass the info to model.users.post
      res.send({success: true});
    }
  }
};


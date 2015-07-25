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
      // read the body of req
      // invoke models.messages.post
      // pass the body of req to messages.post
      // send something nice to client

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


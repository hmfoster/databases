var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      console.log("getting messages from db")
      var connection = db.connectToDB();
      connection.query(
        "SELECT messages.id, messages.text, users.username, rooms.roomname FROM messages JOIN users on messages.user_id = users.id LEFT OUTER JOIN rooms on messages.room_id = rooms.id",
        function(err, res){
          if (err){
            throw err;
          } cb(res);
        }
      );
      db.disconnectFromDB(connection);
    }, // a function which produces all the messages
    post: function (data) {
      console.log("before inserting into database", data);
      //get user from data
      //query database to get user_id
      //db.connect();
      var connection = db.connectToDB();
      console.log(connection.escape(data.text));
      connection.query(
        "INSERT IGNORE INTO rooms (roomname) VALUES (?)", [data.roomname],
        function(err, res){
          if(err){ 
            throw err;
          }
          connection.query(
            "INSERT INTO messages (text, user_id, room_id) VALUES (" + connection.escape(data.text) +
            ", (SELECT id FROM users WHERE username = '" + data.username +
            "'), (SELECT id FROM rooms WHERE roomname = '" + data.roomname + "'))",
            function(err, res){
              if(err){ 
                throw err;
              }
              console.log(res);
              db.disconnectFromDB(connection);
            }
          );
        }
      );
      console.log("completed post");

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {  },
    post: function (data) {
      // connect
      var connection = db.connectToDB();
      connection.query(
        "INSERT IGNORE INTO users (username) VALUES (?)", [data.username],
        function(err, res){
          if(err){ 
            throw err;
          }
          console.log(res);
        }
      );
      db.disconnectFromDB(connection);
    }
  }
};
// IF NOT EXISTS (SELECT name FROM fruit WHERE name = 'mango')
// INSERT INTO fruit (name) 
// VALUES ('mango')
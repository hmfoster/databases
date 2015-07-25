var db = require('../db');


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (data) {
      console.log("before inserting into database", data);
      //get user from data
      //query database to get user_id
      // db.connect();
      db.query(
        "INSERT INTO messages (text, user_id) VALUES ('" + data.text +
        "', (SELECT id FROM users WHERE username = '" + data.username + "'))",
        function(err, res){
          if(err){ 
            throw err;
          }
          console.log(res);
        }
      );
      // db.end();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {  },
    post: function (data) {
      // connect
      // db.connect();
      db.query(
        "INSERT IGNORE INTO users (username) VALUES (?)", [data.username],
        function(err, res){
          if(err){ 
            throw err;
          }
          console.log(res);
        }
      );
      // db.end();
    }
  }
};
// IF NOT EXISTS (SELECT name FROM fruit WHERE name = 'mango')
// INSERT INTO fruit (name) 
// VALUES ('mango')
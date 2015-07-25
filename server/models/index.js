var db = require('../db');


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {  },
    post: function (data) {
      // connect
      db.connect();
      db.query(
        'INSERT INTO users (username) VALUES (?)', [data.username],
        function(err, res){
          if(err){ 
            throw err;
          }
          console.log(res);
        }
      );
      db.end();
    }
  }
};


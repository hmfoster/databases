var Sequelize = require("sequelize");
var mysql = require('mysql');

// Create a database connection and export it from this file.

var sequelize = new Sequelize("chat", "hackreactor", "password", {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;

exports.useSequelize = function(){

  /* TODO this constructor takes the database name, username, then password.
   * Modify the arguments if you need to */

  /* first define the data structure by giving property names and datatypes
   * See http://sequelizejs.com for other datatypes you can use besides STRING. */





  User.hasMany(this.Message);


  //user.getPictures() // gets you all pictures
  //user.getProfilePicture() // gets you only the profile picture


  Message.sync().then(function() {
    console.log("messages synced");
  });

  User.sync().then(function() {
    console.log("user synced");
  });

};

exports.User = User;
exports.Message = Message;



exports.connectToDB = function(){
  var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'hackreactor',
    password: 'password',
    database: 'chat'
  });
  dbConnection.connect();
  return dbConnection;
}

exports.disconnectFromDB = function(connection){
  connection.end()
}

// var dbConnection = mysql.createConnection({
//       host: 'localhost',
//       user: 'hackreactor',
//       password: 'password',
//       database: 'chat'
//     });
// //export a function that 
// exports.connection = function(func){
//   //creates connection, 
//   dbConnection.connect();
//   //invokes a passed in function, 
//   async = promise
//   //closes connection
//   dbConnection.end();
// };




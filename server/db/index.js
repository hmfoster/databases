var Sequelize = require("sequelize");
var mysql = require('mysql');

// Create a database connection and export it from this file.

var sequelize = new Sequelize("chat", "hackreactor", "password", {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;


// exports.connectToDB = function(){
//   var dbConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'hackreactor',
//     password: 'password',
//     database: 'chat'
//   });
//   dbConnection.connect();
//   return dbConnection;
// }

// exports.disconnectFromDB = function(connection){
//   connection.end()
// }

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




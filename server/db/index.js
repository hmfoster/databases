var mysql = require('mysql');

// Create a database connection and export it from this file.

var dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'hackreactor',
  password: 'password',
  database: 'chat'
});


module.exports = dbConnection;



// exports.connectToDB = function(){
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




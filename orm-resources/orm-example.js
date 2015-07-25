/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "hackreactor", "password");
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var User = sequelize.define('User', {
  username: Sequelize.STRING
});

var Message = sequelize.define('Message', {
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});

User.hasMany(Message);
Message.belongsTo(User);

//user.getPictures() // gets you all pictures
//user.getProfilePicture() // gets you only the profile picture


Message.sync().then(function() {
  console.log("messages synced");
});

User.sync().then(function() {
  console.log("synced");
  // now instantiate an object and save it:
  var newUser = User.build({username: "Jean Valjean"});
  return newUser.save();
}).then(function(){
  var newMessage = Message.build(
    {text: "This is a new message"}
  );
  User.findOne({ where: {username: "Jean Valjean"} })
    .then(function(user){
        console.log(user);
        console.log(newMessage);
        newMessage.addUser(user);
        return newMessage.save();
    }).then(function(){
      console.log("You can now check your database");
    });
});

/*
Message.sync().then(function() {
  console.log("messages synced");
  var newMessage = Message.build(
    {text: "This is a new message"}
  );
  User.findOne({ where: {username: "Jean Valjean"} })
    .then(function(user){
        console.log(newMessage);
        newMessage.addUser(user);
        return newUser.save();
    }).then(function(){
      console.log("You can now check your database");
    });
});
*/

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: 
User.sync().success(function() {
   This callback function is called once sync succeeds. 

  // now instantiate an object and save it:
  var newUser = User.build({username: "Jean Valjean"});
  newUser.save().success(function() {

    This callback function is called once saving succeeds.

    // Retrieve objects from the database:
    User.findAll({ where: {username: "Jean Valjean"} }).success(function(usrs) {
      // This function is called back with an array of matches.
      for (var i = 0; i < usrs.length; i++) {
        console.log(usrs[i].username + " exists");
      }
    });
  });
});

*/
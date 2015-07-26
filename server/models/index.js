var db = require('../db');
var Sequelize = require("sequelize");
//instantiate new users and message here
//associate here
//sync here


var User = db.define('User', {
    username: {type: Sequelize.STRING, unique: true}
  });

var Message = db.define('Message', {
    text: Sequelize.STRING
  });

var Room = db.define('Room', {
    roomname: {type: Sequelize.STRING, unique: true}
  });

User.hasMany(Message, {foreignKey: 'user_id'});
Message.belongsTo(User, {foreignKey: 'user_id'});

Room.hasMany(Message, {foreignKey: 'room_id'});
Message.belongsTo(Room, {foreignKey: 'room_id'});

db.sync(); // => promise

module.exports = {
  messages: {
    get: function (cb) {
      //get messages from DB using a query
      Message.findAll({attributes: ['id', 'text'],
        include: [
          { model: User }, { model: Room }
          ]})
        .then(function(messages){
          var response = messages.map(function(message){
            return {
              objectId: message.id,
              text: message.text,
              username: message.User.username,
              roomname: message.Room ? message.Room.roomname : "lobby"
            };
          });
          cb(response);
        });
    }, // a function which produces all the messages
    post: function (data) {
      var user, room;
      User.findOne({where: {username: data.username}})
        .then(function(res){
          user = res;
          console.log("data:", data);
          return Room.findOrCreate({where: {roomname: data.roomname}});
        }).then(function(res){
          console.log("after attemt to create room:", res);
          room = res;
          user.createMessage({text: data.text, room_id: room.id});          
        }).then(function(){
          console.log("we are happy!");
        });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {  },
    post: function (data) {
      User.create(data);
    }
  }
};







// var Message = sequelize.define('Messages', {
//   id: { type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true
//       },
//   username: {type: Sequelize.STRING, field:'user'},
//   roomname: {type: Sequelize.STRING, field:'room'},
//   message: Sequelize.STRING,

      //map through them to change to format for controller
      // [{text: ,, user_id:..}]
      // message.getUser() =>

      //join tables so we can show username in output


      // console.log("getting messages from db");
      // var connection = db.connectToDB();
      // connection.query(
      //   "SELECT messages.id, messages.text, users.username, rooms.roomname FROM messages JOIN users on messages.user_id = users.id LEFT OUTER JOIN rooms on messages.room_id = rooms.id",
      //   function(err, res){
      //     if (err){
      //       throw err;
      //     } cb(res);
      //   }
      // );
      // db.disconnectFromDB(connection);
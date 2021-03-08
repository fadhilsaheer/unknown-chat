const users = [];

module.exports = {
  getRoomUsers: (roomId) => {
    let roomUsers = [];

    roomUsers = users.filter((user) => {
      return (user.room = roomId);
    });
    console.log("====================================");
    console.log(roomUsers);
    console.log("====================================");
    return roomUsers;
  },

  userDisconnect: (userData, roomId) => {
    return new Promise((resolve, reject) => {
      let currentUser = {
        name: userData.name,
        email: userData.email,
        profile: userData.profile,
        room: roomId,
      };

      for (let index = 0; index != users.length; index++) {
        if (users[index] == currentUser) {
          users.splice(index, 1);
          resolve();
          break;
        }
      }

      reject();
    });
  },

  joinRoom: (userData, roomId) => {
    return new Promise(async(resolve, reject) => {
      let newUser = {
        name: userData.name,
        email: userData.email,
        profile: userData.profile,
        room: roomId,
      };

      let canPush = true;

      let index = 0;

      while(index != users.length){
          let user = users[index];
          if(user == newUser){
              canPush = false;
          }

          index++;
      }

      if(canPush){
        users.push(newUser);
      }

      let roomUsers = await module.exports.getRoomUsers(roomId)
      resolve(roomUsers, canPush);
    });
  },
};

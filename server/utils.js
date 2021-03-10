const users = [];

function userJoin(userData, room){
  let newUser = {
    name: userData.name,
    email: userData.email,
    profile: userData.profile,
    room: room,
  }

  let canPush = true;

  users.map((user)=>{
    console.log(`${user.email} : ${newUser.email}`);
    if(user.email == newUser.email){
      canPush = false;
    }
  })


  if(canPush){
    let roomUsers = getRoomUsers(room);
    users.push(newUser);
    return roomUsers;
  }else{
    return false;
  }

}

function getRoomUsers(roomId){
  return users.filter(user => user.room === roomId);
}

module.exports = {
  userJoin,
  getRoomUsers
}
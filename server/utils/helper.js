const rooms = [
    {
        name: "public",
        id: "public",
        description: "public server",
        public: true,
        host: [
            "Public",
            "Public@uchat",
            "https://www.w3schools.com/w3images/streetart2.jpg",
        ],
        users: [],
    },
]; // this will contain all datas of this entire app


// room functions

module.exports = {

    // rooms

    getAllRooms: () => {
        return rooms;
    },

    getOneRoom: (roomId) => {
        return new Promise((resolve, reject) => {
            for(room in rooms){
                room = rooms[room]
                if(room.id == roomId){
                    resolve(room);
                    break;
                }
            }

            reject();
        })
    },


    // user 

    joinRoom: (roomId, userData) => {
        return new Promise((resolve, reject) => {
            module.exports.getOneRoom(roomId).then((room) => {
                room.users.push(userData)
                resolve(room)
            }).catch(() => {
                reject();
            })
        })
    }

    // chats

}
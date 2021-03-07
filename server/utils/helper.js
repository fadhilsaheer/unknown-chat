

const rooms = {
    "public": {
        name: "public",
        id: "public",
        description: "public server",
        public: true,
        host: {
            name: "Public",
            email: "Public@uchat",
            profile: "https://www.w3schools.com/w3images/streetart2.jpg",
        },
        users: [],
        chats: [],
    },
}; // this will contain all datas of this entire app


// room functions

module.exports = {

    // rooms

    getAllRooms: () => {
        return rooms;
    },

    getOneRoom: (roomId) => {
        return new Promise((resolve, reject) => {
            let room = rooms[roomId];

            if(room != undefined){
                resolve(room);
            }else{
                reject();
            }

        })
    },

    // user 

    joinRoom: (roomId, userData) => {
        return new Promise((resolve, reject) => {
            this.getOneRoom(roomId).then((room)=>{
                room.users.push(userData);
                resolve(room);
            }).catch(()=>{
                reject();
            })
        })
    }

    // chats

}


const rooms = []; // this will contain all datas of this entire app

/*

// ! user format
userFormat = {
    name: "userName",
    email: "userEmail",
    profile: "userProfile"
}

// ! room format

room = [
    {
        name: "roomName",
        id: "roomId",
        description: "room description",
        isPublic: true,
        host: userFormat,
        users = [
            userFormat
        ],
        chats = [
            {
                message: "message",
                user: userFormat
            }
        ]
    }
]

*/

// room functions

module.exports = {

    // rooms

    getAllRooms: ()=>{
        return rooms;
    },

    getOneRoom: (roomId)=>{
        return new Promise((resolve, reject)=>{
            for(room in rooms){
                if(roomId == room.id){
                    resolve(room);
                    break;
                }
            }
            reject();
        })
    },

    // user with room

    joinRoom: (roomId, userData)=>{
        return new Promise((resolve, reject)=>{
            this.getOneRoom(roomId).then((room)=>{
                room.users.push(userData);
                resolve(room);
            }).catch(()=>{
                reject();
            })
        })

    },

    createRoom: (roomData)=>{
        rooms.push(roomData);
    },

    deleteRoom: (roomId, userData)=>{
        for(let index=0; index != rooms.length; index++){
            if(rooms[index].id == roomId){
                let room = rooms[index];
                rooms.splice(index, 1);
                return room;
            }
        }
        return null;
    },

    // message 


    clearChat: (roomId, userData)=>{
        this.getOneRoom(roomId).then((room)=>{
            if(room.host == userData){
                room.chats = [];
            }
        })
    },

    newMessage: (roomId, data)=>{
        this.getOneRoom(roomId).then((room)=>{
            room.chats.push(data);
        })
    }

}
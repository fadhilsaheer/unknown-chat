

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

module.export = {


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

    joinRoom: (roomId, userData)=>{

        return new Promise((resolve, reject)=>{

            getOneRoom(roomId).then((room)=>{

                
            })

        })

    },

    createRoom: (roomData)=>{

        rooms.push(roomData);

    },

    clearChat: (roomId, userData)=>{

        getOneRoom(roomId).then((room)=>{
            if(room.host == userData){
                room.chats = [];
            }
        })

    }

    

}
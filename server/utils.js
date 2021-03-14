const fetch = require("node-fetch");
const { databaseUrl, bot } = require("./constants"); 


function deleteUser (socketId, io) {
    return new Promise((resolve, reject) => {

        let url = `${databaseUrl}/users?socketId=${id}`;
        fetch(url).then(user => {
            if(user.length !== 0){

                user = user[0]

                fetch(`${databaseUrl}/users/${user.id}`, {
                    method: 'DELETE'
                });
                
                io.to(user.room).emit('message', {

                    user: bot,
                    message: `${user.name} has left the gang 😥`,
                    type: "text",
                    sender: 'user',

                })

                resolve();


            }else{
                reject();
            }

        }).catch(()=>{
            reject();
        })

    })
}




module.exports = { deleteUser };
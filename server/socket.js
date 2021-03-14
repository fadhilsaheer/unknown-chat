const shortid = require("shortid"); // for generating room id 

const { bot } = require('./constants');
const { deleteUser } = require('./utils');

function socketHandler(socket, io){

    // join room

    socket.on('join-room', ({ roomId, user, roomName }, callback) => {

        socket.emit('message', {

            user: bot,
            message: `Welcome ${user.name} to ${roomName} chat server 😊🎉`,
            type: 'text',
            sender: 'user',

        })

        socket.broadcast.to(roomId).emit('message', {

            user: bot,
            message: `${user.name} has joined the gang 🥳`,
            type: 'text',
            sender: 'user',

        })

        socket.join(roomId);

        callback(socket.id); // returning socket id to user [to save data in database]

    });

    // delete room

    socket.on('delete-chat', () => {

        socket.broadcast.emit("delete-chat");

    })

    // messaging

    socket.on('message', ({ message, user, roomId, type }) => {

        socket.emit('message', {

            user,
            message,
            type,
            sender: 'mine'

        })

        socket.broadcast.emit('message', {

            user,
            message,
            type,
            sender: 'user'

        });

    });

    // clear chat

    socket.on('clear-chat', room => {

        io.to(room).emit('clear-chat');
        io.to(room).emit('message', {

            message: 'Host clear chatted message 🤐',
            type: 'text',
            sender: 'user',
            user: bot,

        })

    });

    // create room

    socket.on('create-room', callback => {

        callback(shortid.generate());

    });

    // quit

    socket.on('quit', () => {

        deleteUser(socket.id, io).then(()=>{

            console.log(`deleted ${socket.id}`);

        }).catch(()=>{

            console.log('got and error');

        })

    })

    // disconnect

    socket.on('disconnect', () => {

        deleteUser(socket.id, io).then(()=>{

            console.log(`deleted ${socket.id}`);

        }).catch(()=>{

            console.log('got and error');

        })

    })

}

module.exports = socketHandler;
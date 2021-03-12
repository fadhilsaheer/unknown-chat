import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import axios from 'axios';
import swal from 'sweetalert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Buttons from './Buttons';
import Chats from './Chats';
import Loader from './Loader';
import ChatForm from './ChatForm';

import constants from '../../utils/consts';

const Chat = ({ user, socket }) => {
    const { roomId } = useParams();
    const location = useHistory();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [message, setMessage] = useState("");
    const [room, setRoom] = useState();
    const [admin, setAdmin] = useState(false);

    // functions

    const handleRoom = () => {
        if (user.length !== 0) {
            axios.get(`${constants.database}/rooms?id=${roomId}`).then((dbData) => {
                if (dbData.data.length !== 0) {
                    let currentRoom = dbData.data[0];
                    setRoom(currentRoom);
                    if(user.email === currentRoom.host.email){
                        setAdmin(true);
                    }


                    socket.emit("join-room", { roomId, user, roomName: dbData.data[0].name }, (socketId) => {
                        let userData = {
                            name: user.name,
                            email: user.email,
                            profile: user.profile,
                            room: roomId,
                            socketId: socketId,
                        }
                        axios.post(`${constants.database}/users`, userData);


                    });

                    return () => {
                        socket.emit("disconnect");
                        socket.off();
                    }

                } else {
                    swal("No such room 🤷‍♂️", `couldn't find ${roomId} in our database`, "error")
                    location.push("/app")
                }
            })
        } else {
            location.push(`/login/${roomId}`)
        }

    };


    useEffect(handleRoom, [roomId]);




    return (
        <div className="chat">
            <Navbar hideButtons hide openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} user={user} />
            <div className="chat-app">
                <div className="chat-top-icons">
                    <div className="chat-navbar-icon">
                        <button onClick={() => setOpenDrawer(true)}><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                    <Buttons admin={admin} room={roomId} socket={socket} />
                </div>
                {!room && <Loader />}
                {room && <div className="chat-container">
                    <h2 className="chat-room-name">{room.name}</h2>
                    <Chats socket={socket} room={room} />
                    <ChatForm user={user} roomId={roomId} setMessage={setMessage} message={message} socket={socket} />
                </div>}
            </div>
        </div>
    );
}

export default Chat;
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import axios from 'axios';

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

    // functions

    // socket.emit("join-room", {roomId, user})
    const joinRoom = () => {
        if (user.length !== 0) {
            axios.get(`${constants.database}/rooms?id=${roomId}`).then((dbData) => {
                if (dbData.data.length !== 0) {
                    setRoom(dbData.data[0])

                    // let userData = {
                    //     name: user.name,
                    //     email: user.email,
                    //     profile: user.profile,
                    //     room: roomId,
                    // }
                    // axios.post(`${constants.database}/users`, userData);

                    socket.emit("join-room", {roomId, user, roomName: dbData.data[0].name});

                } else {
                    location.push("/app")
                }
            })
        } else {
            location.push("/")
        }

    };


    useEffect(joinRoom, [roomId]);




    return (
        <div className="chat">
            <Navbar hide openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} user={user} />
            <div className="chat-app">
                <div className="chat-top-icons">
                    <div className="chat-navbar-icon">
                        <button onClick={() => setOpenDrawer(true)}><FontAwesomeIcon icon={faBars} /></button>
                    </div>
                    <Buttons />
                </div>
                {!room && <Loader />}
                {room && <div className="chat-container">
                    <h2 className="chat-room-name">{room.name}</h2>
                    <Chats socket={socket} room={room} />
                    <ChatForm setMessage={setMessage} message={message} socket={socket} />
                </div>}
            </div>
        </div>
    );
}

export default Chat;
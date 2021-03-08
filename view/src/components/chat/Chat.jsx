import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

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

    const { data: room } = useFetch(`${constants.database}/rooms?id=${roomId}`)


    if (room) {
        if (room.length === 0) {
            location.push("/app")
        } else {
            socket.emit("join-room", {roomId, user})
        }
    }

    socket.on("join-room", (users)=>{
        console.log("users");
        console.log(users);
    })




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
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Buttons from './Buttons';
import Chats from './Chats';
import Loader from './Loader';
import ChatForm from './ChatForm';

const Chat = ({ user, socket }) => {
    const { roomId } = useParams();
    const location = useHistory();

    const [openDrawer, setOpenDrawer] = useState(false);
    // const [room, setRoom] = useState({})
    const [messages, setMesssage] = useState([])

    let room = {
        id: "public",
        name: "public"
    }
    


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
                {!room.id && <Loader />}
                {room.id && <div className="chat-container">
                    <h2 className="chat-room-name">{room.name}</h2>
                    <Chats chats={messages} />
                    <ChatForm setMessage={setMesssage} />
                </div>}
            </div>
        </div>
    );
}

export default Chat;
import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Buttons from './Buttons';

const Chat = ({ user, socket }) => {
    const { roomId } = useParams();
    const location = useHistory();

    const [openDrawer, setOpenDrawer] = useState(false);
    const [room, setRoom] = useState({})

    // socket handling

    socket.emit("user-join", {user, roomId})

    socket.on("join-room", (serverData)=>{
        console.log(serverData);
        if(!serverData.status){
            location.push("/app")
        }else{
            setRoom(serverData.room)
        }
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
                {room.id && <div className="chat-container">
                    <h2>{room.name}</h2>
                    {room.chats.map((chat)=>(
                        <p>{chat}</p>
                    ))}
                </div>}
            </div>
        </div>
    );
}

export default Chat;
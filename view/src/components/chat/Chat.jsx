import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../navbar/Navbar';
import Buttons from './Buttons';

const Chat = ({ user }) => {
    const { roomId } = useParams();

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <div className="chat">
            <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} user={user} />
            <div className="chat-app">
                <div className="navbar-icon">
                    <button onClick={() => setOpenDrawer(true)}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <Buttons />
                <div className="body-container">
                    <p>Hello world</p>
                </div>
            </div>
        </div>
    );
}

export default Chat;
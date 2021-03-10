// import { useState } from 'react';

import ChatMessage from './ChatMsg';


const Chats = ({ socket, room }) => {


    return (
        <div className="chat-message-container">
            <ChatMessage type="robot" chat="Welcome To Uchat" />
        </div>
    );
}
 
export default Chats;
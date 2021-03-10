import { useState, useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import ChatMessage from './ChatMsg';


const Chats = ({ socket, room }) => {

    const [messages, setMessages] = useState([]);

    // messages

    const handleMessageSocketing = () => {
        socket.on("message", message => {
            setMessages([...messages, message]);
        })
    };

    useEffect(handleMessageSocketing, [messages]);

    return (
        <ScrollToBottom className="chat-message-container">
            {messages.map((message)=>(
                <ChatMessage chat={message.message} user={message.user} type={message.type} sender={message.sender} />
            ))}
        </ScrollToBottom>
    );
}
 
export default Chats;
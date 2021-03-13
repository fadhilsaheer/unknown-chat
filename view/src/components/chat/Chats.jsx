import { useEffect } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

import ChatMessage from './ChatMsg';


const Chats = ({ socket, room, messages, setMessages }) => {
    const location = useHistory();

    // messages

    const handleMessageSocketing = () => {
        socket.on("message", message => {
            setMessages([...messages, message]);
        })

        socket.on('clear-chat', () => {
            setMessages([]);
        })

        socket.on('delete-chat', () => {
            swal("You are out", 'host removed you from chat 😥', 'error').then(() => {
                location.push('/app');
            })
        })
    };

    useEffect(handleMessageSocketing, [messages, location, setMessages, socket]);

    return (
        <ScrollToBottom className="chat-message-container">
            {messages.map((message, index) => (
                <ChatMessage key={index} chat={message.message} user={message.user} type={message.type} sender={message.sender} />
            ))}
        </ScrollToBottom>
    );
}

export default Chats;
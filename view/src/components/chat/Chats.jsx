
import ChatMessage from './ChatMsg';

const Chats = ({ chats }) => {
    return (
        <div className="chat-message-container">
            {chats.map(chat=>(
                <ChatMessage chat={chat} />
            ))}
        </div>
    );
}
 
export default Chats;

import ChatMessage from './ChatMsg';

const Chats = () => {

    let chats = {
        message: "Hello this is a message",
        user: {
            name: "john",
            email: "john@gmail.com",
            profile: "https://www.w3schools.com/w3images/streetart2.jpg",
        }
    }

    return (
        <div className="chat-message-container">
            <ChatMessage type="user" chat={chats.message} user={chats.user} />
            <ChatMessage type="mine" chat={chats.message} user={chats.user} />
            <ChatMessage type="robot" chat="host clear chatted message" />
        </div>
    );
}
 
export default Chats;
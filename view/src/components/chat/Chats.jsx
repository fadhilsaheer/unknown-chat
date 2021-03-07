
import ChatMessage from './ChatMsg';

const Chats = ({ socket }) => {

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
            
        </div>
    );
}
 
export default Chats;
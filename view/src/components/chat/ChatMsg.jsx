const ChatMessage = ({ chat, user }) => {
    return (
        <div className="chat-message">
            <img src={chat.user.profile} alt="abcd" />
            <p>{chat.message}</p>
        </div>
    );
}
 
export default ChatMessage;
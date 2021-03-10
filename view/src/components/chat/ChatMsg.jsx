const ChatMessage = ({ chat, user, sender, type }) => {

    // 2 types of messages user & mine
    // user is other sender
    // mine is my message
    // change sender to mine || user

    return (
        <div className={`chat-message chat-message-${sender}`}>
            <img src={user.profile} alt={user.name} />
            <p>{chat}</p>
        </div>
    );
}
 
export default ChatMessage;
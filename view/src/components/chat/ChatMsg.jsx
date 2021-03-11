const ChatMessage = ({ chat, user, sender, type }) => {

    // 2 types of messages user & mine
    // user is other sender
    // mine is my message
    // change sender to mine || user

    let isPlainText = type === 'text' ? true : false; // checking if message is text 

    return (
        <div className={`chat-message chat-message-${sender}`}>
            <img className="chat-message-profile" src={user.profile} alt={user.name} />
            {isPlainText && <p>{chat}</p>}
            {isPlainText === false && <img className="chat-message-image" src={chat} />}
        </div>
    );
}
 
export default ChatMessage;
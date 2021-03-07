const ChatMessage = ({ chat, user, type }) => {

    let isNotRobot = type == "robot" ? false : true;

    return (
        <div className={`chat-message chat-message-${type}`}>
            {isNotRobot && <img src={user.profile} alt={user.name} />}
            <p>{chat}</p>
        </div>
    );
}
 
export default ChatMessage;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ChatContainer = () => {
    return (
        <div className="all-chats-chat-container">
            <h3>Public</h3>
            <h4>A place where all can chat</h4>

            <div className="all-chats-down">
                <div className="all-chats-account">
                    <img src="https://www.w3schools.com/w3images/streetart2.jpg" alt="awesome" />
                    <section>
                        <h3>Public</h3>
                        <h4>public@uchat</h4>
                    </section>
                </div>

                <span><FontAwesomeIcon icon={faUser} /> 12</span>
            </div>
        </div>
    );
}

const AllChats = () => {
    return (
        <div className="all-chats">
            <h2>Public Chats</h2>
            <ChatContainer />
            <ChatContainer />
            <ChatContainer />
            <ChatContainer />
        </div>
    );
}

export default AllChats;
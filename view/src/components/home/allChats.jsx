import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const ChatContainer = ({ room }) => {
    return (
        <Link to={`/chat/${room.id}`}>
            <div className="body-container-chat-container">
                <h3>{room.name}</h3>
                <h4>{room.description}</h4>

                <div className="body-container-down">
                    <div className="body-container-account">
                        <img src={room.host[2]} alt={room.host.name} />
                        <section>
                            <h3>{room.host[0]}</h3>
                            <h4>{room.host[1]}</h4>
                        </section>
                    </div>

                    <span><FontAwesomeIcon icon={faUser} /> {room.users.length}</span>
                </div>
            </div>
        </Link>
    );
}

const AllChats = ({ rooms }) => {

    let allRooms = [];

    for (let room in rooms) {
        allRooms.push(rooms[room]);
    }

    return (
        <div className="body-container">
            <h2>Public Chats</h2>
            {allRooms.map((room) => (
                <ChatContainer key={room.id} room={room} />
            ))}
        </div>
    );
}

export default AllChats;
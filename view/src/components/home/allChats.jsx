import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import constants from '../../utils/consts';
import Loader from '../chat/Loader';

const ChatContainer = ({ room }) => {

    const { data: users, isPending } = useFetch(`${constants.database}/users?room=${room.id}`);

    return (
        <div>
            {isPending && <Loader />}
            {users && <Link to={`/chat/${room.id}`}>
                <div className="body-container-chat-container">
                    <h3>{room.name}</h3>
                    <h4>{room.description}</h4>

                    <div className="body-container-down">
                        <div className="body-container-account">
                            <img src={room.host.profile} alt={room.host.name} />
                            <section>
                                <h3>{room.host.name}</h3>
                                <h4>{room.host.email}</h4>
                            </section>
                        </div>

                        <span><FontAwesomeIcon icon={faUser} /> {users.length}</span>
                    </div>
                </div>
            </Link>}
        </div>
    );
}

const AllChats = () => {

    const { data: rooms, isPending } = useFetch(constants.database + "/rooms?public=true");

    return (
        <div>
            {isPending && <Loader />}
            {rooms && <div className="body-container">
                <h2>Public Chats</h2>
                {rooms.map((room) => (
                    <ChatContainer key={room.id} room={room} />
                ))}
            </div>}
        </div>
    );
}

export default AllChats;
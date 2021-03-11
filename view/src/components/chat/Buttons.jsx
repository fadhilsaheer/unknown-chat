import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';

const Buttons = ({ socket }) => {
    const Location = useHistory();

    const handleDisconnect = () => {
        socket.emit("quit")
        socket.off();
        Location.push("/app")
    }

    return (
        <div className="chat-top-buttons">
            <button onClick={handleDisconnect}><FontAwesomeIcon icon={faTimes} /></button>
            <button><FontAwesomeIcon icon={faLink} /></button>
        </div>
    );
}
 
export default Buttons;
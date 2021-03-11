import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const Buttons = ({ socket }) => {
    const Location = useHistory();

    const handleDisconnect = () => {
        socket.emit("quit")
        socket.off();
        Location.push("/app")
    }

    const copyLink = () => {
        navigator.clipboard.writeText(window.location);
        swal("Copied !!", "link copied successfully", "success")
    }

    return (
        <div className="chat-top-buttons">
            <button onClick={handleDisconnect}><FontAwesomeIcon icon={faTimes} /></button>
            <button onClick={copyLink}><FontAwesomeIcon icon={faLink} /></button>
        </div>
    );
}
 
export default Buttons;
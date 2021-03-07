import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlane } from '@fortawesome/free-solid-svg-icons';

const ChatForm = ({ setMessage }) => {
    return (
        <div className="chat-form">
            <input type="text" onChange={(e)=> setMessage(e.target.value)} placeholder="Enter Message" />
            <div>
                <button><FontAwesomeIcon icon={faPlane} /></button>
                <button><FontAwesomeIcon icon={faImage} /></button>
            </div>
        </div>
    );
}

export default ChatForm;
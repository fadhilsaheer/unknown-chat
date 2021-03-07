import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlane } from '@fortawesome/free-solid-svg-icons';

const ChatForm = () => {
    return (
        <div className="chat-form">
            <input type="text" placeholder="Enter Message" />
            <div>
                <button><FontAwesomeIcon icon={faImage} /></button>
                <button><FontAwesomeIcon icon={faPlane} /></button>
            </div>
        </div>
    );
}

export default ChatForm;
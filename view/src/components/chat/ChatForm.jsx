import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlane } from '@fortawesome/free-solid-svg-icons';

const ChatForm = ({ setMessage, message, socket }) => {

    const handleSend = () => {
        
    }

    const imagePicker = () => {

    }

    return (
        <div className="chat-form">
            <input type="text" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="Enter Message" />
            <div>
                <button onClick={handleSend}><FontAwesomeIcon icon={faPlane} /></button>
                <button onClick={imagePicker}><FontAwesomeIcon icon={faImage} /></button>
            </div>
        </div>
    );
}

export default ChatForm;
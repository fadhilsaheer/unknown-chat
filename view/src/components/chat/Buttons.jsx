import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTimes } from '@fortawesome/free-solid-svg-icons';

const Buttons = () => {
    return (
        <div className="chat-top-buttons">
            <button><FontAwesomeIcon icon={faTimes} /></button>
            <button><FontAwesomeIcon icon={faLink} /></button>
        </div>
    );
}
 
export default Buttons;
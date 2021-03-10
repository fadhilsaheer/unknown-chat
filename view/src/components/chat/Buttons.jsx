import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';

const Buttons = () => {
    const Location = useHistory();

    return (
        <div className="chat-top-buttons">
            <button onClick={()=> Location.push("/app")}><FontAwesomeIcon icon={faTimes} /></button>
            <button><FontAwesomeIcon icon={faLink} /></button>
        </div>
    );
}
 
export default Buttons;
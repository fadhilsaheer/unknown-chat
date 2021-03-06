import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Buttons = () => {
    return (
        <div className="top-buttons">
            <button><FontAwesomeIcon icon={faPlus} /></button>
            <button><FontAwesomeIcon icon={faUserPlus} /></button>
        </div>
    );
}
 
export default Buttons;
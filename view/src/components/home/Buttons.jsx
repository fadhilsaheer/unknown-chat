import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';
import joinRoom from '../room/joinRoom';

const Buttons = ({ showClose, handleCreate }) => {
    const location = useHistory();
    // const [showClose, setShowClose] = useState(false);

    // const handleCreate = () => {
    //     setShowClose(!showClose);
    //     setCurrentMainComponent(showClose ? components.home : components.create);
    // }

    return (
        <div className="top-buttons">
            <button onClick={handleCreate}><FontAwesomeIcon icon={showClose ? faTimes : faPlus} /></button>
            <button onClick={() => joinRoom(location)}><FontAwesomeIcon icon={faUserPlus} /></button>
        </div>
    );
}

export default Buttons;
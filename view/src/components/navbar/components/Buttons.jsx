import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';
import joinRoom from '../../room/joinRoom';

const Buttons = () => {
    const location = useHistory();

    return (
        <div className="navbar-button">
            <div>
                <center>
                    <button><FontAwesomeIcon icon={faPlus} /> <span>Create</span></button>
                </center>
            </div>
            <div>
                <center>
                    <button onClick={()=> joinRoom(location)}><FontAwesomeIcon icon={faUserPlus} /> <span>Join</span></button>
                </center>
            </div>
        </div>
    );
}

export default Buttons;
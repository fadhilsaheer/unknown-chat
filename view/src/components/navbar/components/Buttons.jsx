import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const Buttons = () => {
    return (
        <div className="navbar-button">
            <div>
                <center>
                    <button><FontAwesomeIcon icon={faPlus} /> <span>Create</span></button>
                </center>
            </div>
            <div>
                <center>
                    <button><FontAwesomeIcon icon={faUserPlus} /> <span>Join</span></button>
                </center>
            </div>
        </div>
    );
}

export default Buttons;
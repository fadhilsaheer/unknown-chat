import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return (
        <div className="navbar-menu">
            <h2>Menu</h2>
            <div>
                <button className="navbar-menu-current"><FontAwesomeIcon className="navbar-menu-logo" icon={faHome} /> <span>Chats</span></button>
                <button><FontAwesomeIcon className="navbar-menu-logo" icon={faUser} /> <span>Profile</span></button>
                <button><FontAwesomeIcon className="navbar-menu-logo" icon={faTools} /> <span>Settings</span></button>
            </div>
        </div>
    );
}
 
export default Menu;
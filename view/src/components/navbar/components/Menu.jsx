import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ current }) => {

    let homeClass = current === 'home' ? 'navbar-menu-current' : '';
    let profileClass = current === 'profile' ? 'navbar-menu-current' : '';
    let settingsClass = current === 'settings' ? 'navbar-menu-current' : '';


    return (
        <div className="navbar-menu">
            <h2>Menu</h2>
            <div>
                <button className={homeClass}><FontAwesomeIcon className="navbar-menu-logo" icon={faHome} /> <span>Chats</span></button>
                <button className={profileClass}><FontAwesomeIcon className="navbar-menu-logo" icon={faUser} /> <span>Profile</span></button>
                <button className={settingsClass}><FontAwesomeIcon className="navbar-menu-logo" icon={faTools} /> <span>Settings</span></button>
            </div>
        </div>
    );
}

export default Menu;
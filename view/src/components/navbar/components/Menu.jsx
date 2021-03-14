import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTools } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';

const Menu = ({ current, setCurrenComponentName, setCurrentMainComponent, components, handleDisconnect }) => {

    const location = useHistory();

    let homeClass = current === 'home' ? 'navbar-menu-current' : '';
    let profileClass = current === 'profile' ? 'navbar-menu-current' : '';
    let settingsClass = current === 'settings' ? 'navbar-menu-current' : '';

    const handleClick = (place) => {
        if (setCurrentMainComponent) {
            setCurrentMainComponent(components[place]);
            setCurrenComponentName(place)
        } else {
            handleDisconnect();
            location.push("/app")
        }
    }

    return (
        <div className="navbar-menu">
            <h2>Menu</h2>
            <div>
                <button onClick={() => handleClick('home')} className={homeClass}><FontAwesomeIcon className="navbar-menu-logo" icon={faHome} /><span>Home</span></button>
                <button onClick={() => handleClick('profile')} className={profileClass}><FontAwesomeIcon className="navbar-menu-logo" icon={faUser} /><span>Profile</span></button>
                <button onClick={() => handleClick('settings')} className={settingsClass}><FontAwesomeIcon className="navbar-menu-logo" icon={faTools} /><span>Settings</span></button>
            </div>
        </div>
    );
}

export default Menu;
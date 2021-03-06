import { useState } from 'react';

import Logo from './components/Logo';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Buttons from './components/Buttons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { Drawer } from '@material-ui/core';

const Navbar = ({ user }) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleNav = () => {
        setOpenDrawer(true)
    }

    return (
        <div className="navbar-container">
            <div className="navbar-icon">
                <button onClick={toggleNav} ><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className="navbar navbar-temp">
                <Logo />
                <Menu />
                <Profile user={user} />
                <Buttons />
            </div>
            <Drawer anchor="left" open={openDrawer} onClose={()=> setOpenDrawer(false)}>
                <div className="navbar">
                    <Logo />
                    <Menu />
                    <Profile user={user} />
                    <Buttons />
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
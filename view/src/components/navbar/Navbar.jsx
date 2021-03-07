import Logo from './components/Logo';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Buttons from './components/Buttons';


import { Drawer } from '@material-ui/core';

const Navbar = ({ user, openDrawer, setOpenDrawer, hide }) => {


    let navbarShow = hide ? false : true;

    return (
        <div className="navbar-container">
            {navbarShow && 
            <div className="navbar navbar-temp">
                <Logo />
                <Menu />
                <Profile user={user} />
                <Buttons />
            </div>
            }
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
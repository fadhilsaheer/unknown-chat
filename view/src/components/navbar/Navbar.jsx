import Logo from './components/Logo';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Buttons from './components/Buttons';


import { Drawer } from '@material-ui/core';

const Navbar = ({ user, openDrawer, setOpenDrawer, hide, createButton, hideButtons, current, setCurrenComponentName, setCurrentMainComponent, components, handleDisconnect }) => {

    let navbarShow = hide ? false : true;
    let showButtons = hideButtons ? false : true;

    return (
        <div className="navbar-container">
            {navbarShow &&
                <div className="navbar navbar-temp">
                    <Logo />
                    <Menu handleDisconnect={handleDisconnect} current={current} components={components} setCurrenComponentName={setCurrenComponentName} setCurrentMainComponent={setCurrentMainComponent} />
                    <Profile user={user} />
                    {showButtons && <Buttons createButton={createButton} />}
                </div>
            }
            <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <div className="navbar">
                    <Logo />
                    <Menu handleDisconnect={handleDisconnect} current={current} components={components} setCurrenComponentName={setCurrenComponentName} setCurrentMainComponent={setCurrentMainComponent} />
                    <Profile user={user} />
                    {showButtons && <Buttons createButton={createButton} />}
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
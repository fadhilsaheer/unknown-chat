import Logo from './components/Logo';
import Menu from './components/Menu';
import Profile from './components/Profile';
import Buttons from './components/Buttons';

const Navbar = ({user}) => {
    return (
        <div className="navbar">
            <Logo />
            <Menu />
            <Profile user={user} />
            <Buttons />
        </div>
    );
}
 
export default Navbar;
import Logo from './components/Logo';
import Menu from './components/Menu';
import Profile from './components/Profile';

const Navbar = ({user}) => {
    return (
        <div className="navbar">
            <Logo />
            <Menu />
            <Profile user={user} />
        </div>
    );
}
 
export default Navbar;
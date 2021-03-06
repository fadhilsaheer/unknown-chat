import { logo } from './logos'


const Navbar = () => {
    return (
        <section className="navbar">
            <div className="navbar-logo">
                <h2>UCHAT</h2>
                <img src={logo} alt="uchat" />
            </div>
        </section>
    );
}
 
export default Navbar;
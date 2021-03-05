import swal from 'sweetalert';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


import landingImage from '../../assets/home-chat.png';

const Landing = ({ setUser }) => {

    const handleLogin = ()=>{}

    return (
        <section className="landing">
            <div className="landing-text">
                <h1>Unknown Chat</h1>
                <h3>Just chat...</h3>
                <button className="btn">Login With Google <FontAwesomeIcon icon={faGoogle} /> </button>
            </div>
            <div>
                <img src={landingImage} onClick={handleLogin} alt="landing-page" />
            </div>
        </section>
    );
}

export default Landing;
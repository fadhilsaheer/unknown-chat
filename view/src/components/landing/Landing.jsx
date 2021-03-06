import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import login from './login';

import landingImage from '../../assets/home-chat.png';

const Landing = ({ setUser }) => {

    const location = useHistory();

    const handleLogin = () => {
        login().then((userData) => {
            setUser(userData);
            location.push("/app");
        }).catch(() => {
            swal("Login Failed !!", "failed to login from google account 😥", "error")
        })
    }

    return (
        <section className="landing">
            <div className="landing-text">
                <h1>Unknown Chat</h1>
                <h3>Just chat...</h3>
                <button className="btn" onClick={handleLogin}>Login With Google <FontAwesomeIcon icon={faGoogle} /> </button>
            </div>
            <div>
                <img src={landingImage} alt="landing-page" />
            </div>
        </section>
    );
}

export default Landing;
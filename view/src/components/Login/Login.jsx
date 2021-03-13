import { useHistory, useParams } from 'react-router-dom';

import login from '../landing/login'; // login with google
import swal from 'sweetalert';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = ({ setUser, user }) => {

    const room = new URLSearchParams(window.location.search).get("id");
    const location = useHistory();

    const handleLogin = () => {
        login()
            .then((user) => {
                setUser(user);
                location.push(`/chat?id=${room}`)
            })
            .catch(() => {
                swal("Login Failed !!", "failed to login from google account 😥", "error");
                window.location.reload();
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
                {/* <img src={landingImage} alt="landing-page" /> */}
            </div>
        </section>
    );
}

export default Login;
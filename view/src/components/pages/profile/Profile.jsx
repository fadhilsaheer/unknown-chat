import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Profile = ({ user }) => {
    return (
        <div className="body-container">
            <h2>Profile</h2>

            <div className="profile-page">
                <img src={user.profile} alt={user.name} />
                <div>
                    <h2><FontAwesomeIcon icon={faUserTie} /> {user.name}</h2>
                    <h2><FontAwesomeIcon icon={faEnvelope} /> {user.email}</h2>
                </div>
            </div>
        </div>
    );
}

export default Profile;
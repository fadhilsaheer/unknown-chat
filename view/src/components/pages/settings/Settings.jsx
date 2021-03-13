import { useState } from 'react';

import { FormControl, FormControlLabel } from '@material-ui/core';
import StyledCheckBox from './StyledCheckbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';



const Settings = ({ user, setUser }) => {
    const [anonymousUser, setAnonymousUser] = useState(true);
    const currentUser = user;

    const handleAnonymous = () => {
        setAnonymousUser(!anonymousUser);
    }

    return (
        <div className="body-container">
            <h2>Settings</h2>

            <div className="settings-profile">
                <img src={user.profile} alt={user.name} />
                <div>
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                </div>
            </div>

            <div className="settings-control">
                <FormControl>
                    <FormControlLabel
                        control={
                            <StyledCheckBox
                                icon={<FontAwesomeIcon icon={faUserSecret} />}
                                checkedIcon={
                                    <FontAwesomeIcon icon={faUserSecret} />
                                }
                                checked={anonymousUser}
                                name="anonymous"
                                onChange={handleAnonymous}
                            />
                        }
                    />
                </FormControl>

                <h3>{anonymousUser ? 'Lets go anonymous !!' : 'Become Anonymous'}</h3>
            </div>


        </div>
    );
}

export default Settings;
import { useState } from 'react';

import { FormControl, FormControlLabel } from '@material-ui/core';
import StyledCheckBox from './StyledCheckbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';



const Settings = ({ user }) => {
    const [anonymousUser, setAnonymousUser] = useState(false);

    const handleAnonymous = () => {
        setAnonymousUser(!anonymousUser);
    }

    return (
        <div className="body-container">
            <h2>Settings</h2>

            <div className="settings-profile">
                <img src={user.profile} alt={user.name} />
                <h3>{user.name}</h3>
                <h4>{user.email}</h4>
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
                                name="anonymous"
                                onChange={handleAnonymous}
                            />
                        }
                    />
                </FormControl>

                <h3>Become Anonymous</h3>
            </div>


        </div>
    );
}

export default Settings;
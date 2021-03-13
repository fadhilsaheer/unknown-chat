import { useState } from 'react';

import { FormControl, FormControlLabel } from '@material-ui/core';
import StyledCheckBox from './StyledCheckbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import userProfile from '../../../assets/user.png'; // user avatar

const Settings = ({ user, setUser }) => {
    const [anonymousUserOption, setAnonymousUserOption] = useState(false);

    const currentUser = user;
    const [anonymousUser, setAnonymousUser] = useState(currentUser);

    const handleAnonymous = () => {
        setAnonymousUserOption(!anonymousUserOption);

        if (anonymousUser === currentUser) {

            setAnonymousUser({
                name: 'Unknown 🕵️‍♂️',
                email: 'Unknown@Uchat',
                profile: userProfile,
            })
            setUser({
                name: 'Unknown 🕵️‍♂️',
                email: 'Unknown@Uchat',
                profile: userProfile,
            })

        } else {
            setAnonymousUser(currentUser);
            setUser(currentUser);
        }
    }

    return (
        <div className="body-container">
            <h2>Settings</h2>

            <div className="settings-profile">
                <img src={anonymousUser.profile} alt={user.name} />
                <div>
                    <h3>{anonymousUser.name}</h3>
                    <h4>{anonymousUser.email}</h4>
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
                                checked={anonymousUserOption}
                                name="anonymous"
                                onChange={handleAnonymous}
                            />
                        }
                    />
                </FormControl>

                <h3>{anonymousUserOption ? 'Lets go anonymous !!' : 'Become Anonymous'}</h3>
            </div>


        </div>
    );
}

export default Settings;
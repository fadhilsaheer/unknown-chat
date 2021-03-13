import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FormControl, FormControlLabel, TextField, Button } from '@material-ui/core';
import StyledCheckBox from './StyledCheckbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

import userProfile from '../../../assets/user.png'; // user avatar
import swal from 'sweetalert';

const Settings = ({ user, setUser }) => {
    const location = useHistory();

    const currentUser = user;
    const [anonymousUserOption, setAnonymousUserOption] = useState(false);
    const [anonymousUser, setAnonymousUser] = useState(currentUser);


    useEffect(() => {
        if (user.profile === userProfile) {
            swal('Sorry, You need to login', 'anonymous user option is in a buggy state 😥', 'error').then(() => {
                location.push('/');
            })
        }
    }, [location, setUser, user.profile]);


    const handleAnonymous = () => {

        if (anonymousUser === user) {

            let newUser = {
                name: 'Unknown 🕵️‍♂️',
                email: 'Unknown@Uchat',
                profile: userProfile,
            }
            setAnonymousUser(newUser);
            setUser(newUser);

        } else {
            setAnonymousUser(currentUser);
            setUser(currentUser)
        }

        setAnonymousUserOption(!anonymousUserOption); // set opposite of anonymous user option
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

                <h3>{anonymousUserOption ? 'Become Normal 🙆‍♂️' : 'Become Anonymous 🕵️‍♂️'}</h3>
            </div>

        </div>
    );
}

export default Settings;
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FormControl, FormControlLabel } from '@material-ui/core';
import StyledCheckBox from './StyledCheckbox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

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
                uid: currentUser.email,
            }
            setAnonymousUser(newUser);
            setUser(newUser);

        } else {
            setAnonymousUser(currentUser);
            setUser(currentUser)
        }

        setAnonymousUserOption(!anonymousUserOption); // set opposite of anonymous user option
    }

    const handleLogout = () => {
        swal({
            title: 'Are you sure ??',
            text: "don't you want to chat 😅",
            icon: 'error',
            buttons: ['lets chat', 'forget me'],
            dangerMode: true,
        }).then((permission) => {
            if (permission) {
                swal({
                    title: 'see you later 👋',
                    text: 'its hard to forget some one😭',
                    timer: 2000
                }).then(() => {
                    location.push("/")
                })
            } else {
                swal("💗 Love you 💗", 'thanks for staying 😇, have some cake 🍰', 'success')
            }
        })
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
            <br />
            <br />

            <button onClick={handleLogout} className="settings-btn">Logout 🤐</button>


        </div>
    );
}

export default Settings;
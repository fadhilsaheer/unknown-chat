import { useState } from 'react';

import { FormControl, Checkbox, FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

const StyledCheckBox = withStyles({
    root: {
        '&$checked': {
            color: '#a974ff',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const Settings = () => {
    const [anonymousUser, setAnonymousUser] = useState(false);

    const handleAnonymous = () => {
        setAnonymousUser(!anonymousUser);
    }

    return (
        <div className="body-container">
            <h2>Settings</h2>

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
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import swal from 'sweetalert';
import axios from 'axios';
import constants from '../../utils/consts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faDoorOpen, faLaughWink } from '@fortawesome/free-solid-svg-icons';

// custom radio

const CustomRadio = withStyles({
    root: {
        color: '#c49fff',
        '&$checked': {
            color: '#a974ff',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);



const CreateRoom = ({ user, socket }) => {

    const location = useHistory();

    const [roomName, setRoomName] = useState('');
    const [roomDescription, setRoomDescription] = useState('my chat server 😊');
    const [visibility, setVisibility] = useState(true);


    const handleVisibility = (statement) => {
        setVisibility(statement === 'true' ? true : false);
    }

    const handleSubmit = () => {
        if (roomName.trim().length !== 0) {
            socket.emit('create-room', (roomId) => {
                let data = {
                    name: roomName,
                    description: roomDescription,
                    public: visibility,
                    id: roomId,
                    host: user,
                }
                axios.post(`${constants.database}/rooms`, data).then(() => {
                    swal("Created Your Room 😇", `successfully created ${roomId} in database`, 'success').then(() => {
                        location.push(`/chat?id=${roomId}`)
                    })
                })
            })
        } else {
            swal('Failed To Submit 🥱', 'you need a valid room name', 'error');
        }
    }

    return (
        <div className="body-container create-room">
            <h2>Create Room <FontAwesomeIcon icon={faLaughWink} /></h2>

            <div className="create-room-form">
                <input type="text" placeholder="enter room name" value={roomName} onChange={(event) => setRoomName(event.target.value)} />
                <input type="text" placeholder="enter room description" value={roomDescription} onChange={(event) => setRoomDescription(event.target.value)} />
            </div>

            <div className="create-room-visibility">
                <h2>Make {roomName ? roomName : 'my room'} <FontAwesomeIcon icon={faDoorOpen} /> </h2>

                <FormControl component="fieldset">
                    <RadioGroup aria-label="visibility" name="visibility" value={visibility} onChange={(event) => handleVisibility(event.target.value)}>
                        <FormControlLabel value={true} control={<CustomRadio />} label="Public" />
                        <FormControlLabel value={false} control={<CustomRadio />} label="Private" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className='create-room-visibility'>
                <button onClick={handleSubmit}>
                    Create {roomName} <FontAwesomeIcon icon={faRocket} />
                </button>
            </div>

        </div>
    );
}

export default CreateRoom;
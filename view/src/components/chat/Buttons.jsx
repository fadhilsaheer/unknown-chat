import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Drawer, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

import swal from 'sweetalert';
import axios from 'axios'

import constants from '../../utils/consts';

const Buttons = ({ socket, room }) => {
    const [roomUsers, setRoomUsers] = useState([]);
    const [canShowRoomUsers, setCanShowRoomUsers] = useState(false);

    const Location = useHistory();

    const handleDisconnect = () => {
        socket.emit("quit")
        socket.off();
        Location.push("/app")
    }

    const copyLink = () => {
        navigator.clipboard.writeText(window.location);
        swal("Copied !!", "link copied successfully", "success")
    }

    const displayAllRoomUsers = () => {
        axios.get(`${constants.database}/users?room=${room}`).then((res) => {
            setRoomUsers(res.data);
            setCanShowRoomUsers(true);
        })
    }

    return (
        <div className="chat-top-buttons">
            <button onClick={handleDisconnect}><FontAwesomeIcon icon={faTimes} /></button>
            <button onClick={copyLink}><FontAwesomeIcon icon={faLink} /></button>
            <button onClick={displayAllRoomUsers}><FontAwesomeIcon icon={faUser} /></button>

            <Drawer anchor="right" open={canShowRoomUsers} onClose={() => setCanShowRoomUsers(false)}>
                <div className="room-users-container">
                    <h2>All Users</h2>
                    <List component="nav" aria-label="users">
                        {roomUsers && roomUsers.map(user => (
                            <ListItem key={user.email} button>
                                <ListItemAvatar children={<Avatar alt={user.name} src={user.profile} />} />
                                <ListItemText
                                    primary={user.name}
                                    secondary={user.email}
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

export default Buttons;

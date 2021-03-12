import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Drawer, List, ListItem, ListItemAvatar, ListItemText, Avatar, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTimes, faUser, faUserNinja, faEraser, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import swal from 'sweetalert';
import axios from 'axios'

import constants from '../../utils/consts';

const StyledFab = withStyles({
    root: {
        background: 'linear-gradient(45deg, #a974ff 30%, #c49fff 90%)',
        border: 0,
        color: 'white',
      },
      label: {
        textTransform: 'capitalize',
      },
})(Fab)

const Buttons = ({ socket, room, admin }) => {
    const [roomUsers, setRoomUsers] = useState([]);
    const [canShowRoomUsers, setCanShowRoomUsers] = useState(false);
    const [canShowAdminPanel, setCanShowAdminPanel] = useState(false);

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
            {admin === false && <button onClick={copyLink}><FontAwesomeIcon icon={faLink} /></button>}
            {admin === false && <button onClick={displayAllRoomUsers}><FontAwesomeIcon icon={faUser} /></button>}
            {admin && <button onClick={()=> setCanShowAdminPanel(true)}><FontAwesomeIcon icon={faUserNinja} /></button>}

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

            {admin && 
                <Drawer anchor="right" open={canShowAdminPanel} onClose={()=> setCanShowAdminPanel(false)}>
                    <div className="room-users-container">
                        <h2>Admin <FontAwesomeIcon icon={faUserNinja} /></h2>
                        <List component="nav" aria-label="admin">
                            <ListItem><StyledFab><FontAwesomeIcon icon={faUser} /></StyledFab></ListItem>
                            <ListItem><StyledFab><FontAwesomeIcon icon={faLink} /></StyledFab></ListItem>
                            <ListItem><StyledFab><FontAwesomeIcon icon={faEraser} /></StyledFab></ListItem>
                            <ListItem><StyledFab><FontAwesomeIcon icon={faTrashAlt} /></StyledFab></ListItem>
                        </List>
                    </div>
                </Drawer>
            }
        </div>
    );
}

export default Buttons;

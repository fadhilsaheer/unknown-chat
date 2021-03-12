import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Drawer, List, ListItem, ListItemAvatar, ListItemText, Avatar, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faTimes, faUser, faUserSecret, faEraser, faTrashAlt, faUserTie, faBomb, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

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

const Buttons = ({ socket, room, admin, setMessages }) => {
    const [roomUsers, setRoomUsers] = useState([]);
    const [canShowRoomUsers, setCanShowRoomUsers] = useState(false);
    const [canShowHelper, setCanShowHelper] = useState(false);

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

    const handleClearChat = (forAll) => {
        if (forAll) {
            if (admin) {
                swal({
                    title: 'Are you sure ??',
                    text: 'whole room user\'s chats will clear 🤐 ',
                    icon: 'warning',
                    buttons: ['cancel', 'clear chat']
                }).then((permission) => {
                    if (permission) {
                        socket.emit('clear-chat', room);
                    }
                })
            }
        } else {
            swal({
                title: 'Are you sure ??',
                text: 'do you want to clear your chat 🤐',
                icon: 'warning',
                buttons: ['cancel', 'clear chat']
            }).then((permission) => {
                if (permission) {
                    setMessages([])
                }
            })
        }
    }

    const handleDeleteChat = () => {
        if (admin) {
            swal({
                title: 'Are you sure ??',
                text: 'do you want to delete this chat room 😶',
                buttons: ['cancel', 'yes'],
                dangerMode: true,
                icon: 'error'
            }).then((permission) => {
                if (permission) {
                    socket.emit('delete-chat');
                    axios.delete(`${constants.database}/rooms/${room}`);
                    Location.push('/app')
                }
            })
        }
    }

    return (
        <div className="chat-top-buttons">
            <button onClick={handleDisconnect}><FontAwesomeIcon icon={faTimes} /></button>
            <button onClick={() => setCanShowHelper(true)}><FontAwesomeIcon icon={faEllipsisV} /></button>

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

            <Drawer anchor="right" open={canShowHelper} onClose={() => setCanShowHelper(false)}>
                <div className="room-users-container">
                    <h2>User <FontAwesomeIcon icon={faUserTie} /></h2>
                    <List component="nav" aria-label="admin">
                        <ListItem><StyledFab
                            onClick={() => {
                                setCanShowHelper(false);
                                displayAllRoomUsers();
                            }}>
                            <FontAwesomeIcon icon={faUser} />
                        </StyledFab></ListItem>

                        <ListItem><StyledFab onClick={copyLink}><FontAwesomeIcon icon={faLink} /></StyledFab></ListItem>

                        <ListItem><StyledFab onClick={() => handleClearChat(false)}><FontAwesomeIcon icon={faEraser} /></StyledFab></ListItem>

                        <br />
                        <br />

                        {admin &&
                            <section>
                                <h2>Host <FontAwesomeIcon icon={faUserSecret} /></h2>


                                <ListItem><StyledFab onClick={() => handleClearChat(true)}><FontAwesomeIcon icon={faBomb} /></StyledFab></ListItem>

                                <ListItem><StyledFab onClick={handleDeleteChat}><FontAwesomeIcon icon={faTrashAlt} /></StyledFab></ListItem>
                            </section>
                        }

                    </List>
                </div>
            </Drawer>
        </div>
    );
}

export default Buttons;

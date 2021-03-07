import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import AllChats from './allChats';
import Buttons from './Buttons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Home = ({ userData, socket }) => {
    const location = useHistory();

    if (userData.length === 0) {
        // location.push("/");
        // sample profile data
        userData = {
            name: "john",
            email: "john@gmail.com",
            profile: "https://www.w3schools.com/w3images/streetart2.jpg",
        }
    }

    const [openDrawer, setOpenDrawer] = useState(false);
    const [rooms, setRooms] = useState([]);

    const toggleNav = () => {
        setOpenDrawer(true)
    }

    socket.emit("all-chats")

    socket.on("all-chats", (serverRooms)=>{
        setRooms(serverRooms);
    })


    return (
        <div className="home">
            <Navbar user={userData} setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
            <div className="home-app">
                <div className="navbar-icon">
                    <button onClick={toggleNav} ><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <Buttons />
                <div className="all-chats-container">
                    <AllChats rooms={rooms} />
                </div>
            </div>
        </div>
    );
}

export default Home;
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import Buttons from './Buttons';

// sections

import AllChats from './allChats';
import CreateRoom from '../room/CreateRoom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Home = ({ userData, socket }) => {
    const location = useHistory();

    const components = {
        home: <AllChats />,
        create: <CreateRoom socket={socket} user={userData} />,
    }

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
    const [currentMainComponent, setCurrentMainComponent] = useState(components.home)


    return (
        <div className="home">
            <Navbar user={userData} setOpenDrawer={setOpenDrawer} openDrawer={openDrawer} />
            <div className="home-app">
                <div className="navbar-icon">
                    <button onClick={()=> setOpenDrawer(true)} ><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <Buttons components={components} setCurrentMainComponent={setCurrentMainComponent} />
                <div className="all-chats-container">
                    {currentMainComponent}
                </div>
            </div>
        </div>
    );
}

export default Home;
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Buttons from './Buttons';
// sections
import AllChats from './allChats';
import CreateRoom from '../room/CreateRoom';
import Settings from '../pages/settings/Settings';
import Profile from '../pages/profile/Profile';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Home = ({ userData, socket, setUser }) => {
    const location = useHistory();

    // create button states
    const [showClose, setShowClose] = useState(false);
    const handleCreate = () => {
        setShowClose(!showClose);
        setCurrentMainComponent(showClose ? components.home : components.create)
    }

    const components = {
        home: <AllChats />,
        create: <CreateRoom socket={socket} user={userData} />,
        settings: <Settings setUser={setUser} user={userData} />,
        profile: <Profile user={userData} />
    }


    if (userData.length === 0) {
        location.push("/");
        // sample profile data
        userData = {
            name: "john",
            email: "john@gmail.com",
            profile: "https://www.w3schools.com/w3images/streetart2.jpg",
        }
    }

    const [openDrawer, setOpenDrawer] = useState(false);
    const [currentMainComponent, setCurrentMainComponent] = useState(components.home);
    const [currentComponentName, setCurrenComponentName] = useState('home')


    return (
        <div className="home">
            <Navbar
                user={userData}
                setOpenDrawer={setOpenDrawer}
                setCurrentMainComponent={setCurrentMainComponent}
                setCurrenComponentName={setCurrenComponentName}
                openDrawer={openDrawer}
                currentMainComponent={currentMainComponent}
                createButton={handleCreate}
                current={currentComponentName}
                components={components}
            />
            <div className="home-app">
                <div className="navbar-icon">
                    <button onClick={() => setOpenDrawer(true)} ><FontAwesomeIcon icon={faBars} /></button>
                </div>
                <Buttons showClose={showClose} handleCreate={handleCreate} />
                <div className="all-chats-container">
                    {currentMainComponent}
                </div>
            </div>
        </div>
    );
}

export default Home;
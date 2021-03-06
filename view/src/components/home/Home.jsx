import { useHistory } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import AllChats from './allChats';
import Buttons from './Buttons';

const Home = ({ userData }) => {
    const location = useHistory();

    if (userData.length === 0) {
        location.push("/");
        // sample profile data
        userData = {
            name: "john",
            email: "john@gmail.com",
            profile: "https://www.w3schools.com/w3images/streetart2.jpg",
        }
    }

    return (
        <div className="home">
            <Navbar user={userData} />
            <div className="home-app">
                <Buttons />
                <div className="all-chats-container">
                    <AllChats />
                </div>
            </div>
        </div>
    );
}

export default Home;
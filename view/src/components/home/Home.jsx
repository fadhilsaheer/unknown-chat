import { useHistory } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

const Home = ({ userData }) => {
    const location = useHistory();

    if(userData.length == 0){
        location.push("/")
        // sample profile data
        // userData = {
        //     name: "john",
        //     email: "john@gmail.com",
        //     profile: "https://www.w3schools.com/w3images/streetart2.jpg",
        // }
    }

    return (
        <div className="home">
            <Navbar user={userData} />
            <div>
            </div>
        </div>
    );
}
 
export default Home;
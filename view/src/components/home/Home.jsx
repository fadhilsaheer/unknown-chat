import { useHistory } from 'react-router-dom';

import Navbar from '../navbar/Navbar';

const Home = ({ userData }) => {
    const location = useHistory();

    // if(userData.length == 0){
    //     location.push("/")
    // }

    return (
        <div className="home">
            <Navbar />
            <div>
            </div>
        </div>
    );
}
 
export default Home;
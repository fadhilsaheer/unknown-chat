import { useHistory } from 'react-router-dom';

const Redirector = () => {
    const location = useHistory();
    location.push('/app/home')
    return (
        <div></div>
    );
}
 
export default Redirector;
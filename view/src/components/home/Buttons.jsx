import {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { useHistory } from 'react-router-dom';
import joinRoom from '../room/joinRoom';

const Buttons = ({ setCurrentMainComponent, components }) => {
    const location = useHistory();

    return (
        <div className="top-buttons">
            <button onClick={() => setCurrentMainComponent(components.create)}><FontAwesomeIcon icon={faPlus} /></button>
            <button onClick={()=> joinRoom(location)}><FontAwesomeIcon icon={faUserPlus} /></button>
        </div>
    );
}
 
export default Buttons;
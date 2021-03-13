import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faPlane } from '@fortawesome/free-solid-svg-icons';

const ChatForm = ({ setMessage, message, socket, user, roomId }) => {

    const [imageMessage, setImageMessage] = useState(null);

    useEffect(() => {
        if (imageMessage !== null) {
            socket.emit('message', { message: imageMessage, user, roomId, type: 'image' });
            setImageMessage(null)
        }
    }, [imageMessage, roomId, socket, user])

    const handleSend = () => {
        if (message.trim().length !== 0) {
            socket.emit('message', { message, user, roomId, type: 'text' });
            setMessage('');
        }
    }

    const imagePicker = () => {
        let fileUploader = document.getElementById("fileUploader");

        fileUploader.click();

        fileUploader.addEventListener("change", (event) => {
            let file = event.target.files[0];
            var reader = new FileReader();

            reader.onloadend = () => {
                setImageMessage(reader.result);
            }

            if (file) {
                reader.readAsDataURL(file);
            }
        })
    }

    return (
        <div className="chat-form">
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message" />
            <input type="file" className='hide' id="fileUploader" accept="image/*" /> {/* for file upload */}
            <div>
                <button onClick={handleSend}><FontAwesomeIcon icon={faPlane} /></button>
                <button onClick={imagePicker}><FontAwesomeIcon icon={faImage} /></button>
            </div>
        </div>
    );
}

export default ChatForm;
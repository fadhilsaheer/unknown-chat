import swal from 'sweetalert';
import botImage from './../../assets/logo.png';

const ChatMessage = ({ chat, user, sender, type }) => {

    // 2 types of messages user & mine
    // user is other sender
    // mine is my message
    // change sender to mine || user

    let isPlainText = type === 'text' ? true : false; // checking if message is text

    const showPopup = (image) => {
        swal({
            content: {
                element: "img",
                attributes: {
                    src: image,
                    className: "swal-image"
                }
            },
            buttons: ["Close", { text: "Download" }]
        }).then((canDownload) => {
            if (canDownload) {
                let downloadFileHelper = document.createElement("a");
                downloadFileHelper.style.display = 'none';
                downloadFileHelper.href = image;
                downloadFileHelper.download = "image";

                document.body.appendChild(downloadFileHelper);
                downloadFileHelper.click();
                document.body.removeChild(downloadFileHelper);
            }
        })
    }

    return (
        <div className={`chat-message chat-message-${sender}`}>
            <img className="chat-message-profile" src={user.profile === "bot" ? botImage : user.profile} alt={user.name} />
            {isPlainText && <p>{chat}</p>}
            {isPlainText === false && <img onClick={() => showPopup(chat)} className="chat-message-image" src={chat} alt={`sender by ${user.name}`} />}
        </div>
    );
}

export default ChatMessage;
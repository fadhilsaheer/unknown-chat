import swal from 'sweetalert';

const joinRoom = (location) => {
    swal({
        text: 'Enter room id 😉',
        content: 'input',
        buttons: ['cancel', 'join']
    }).then((value)=>{
        if(value){
            location.push(`/chat/${value}`);
        }
    })
}

export default joinRoom;
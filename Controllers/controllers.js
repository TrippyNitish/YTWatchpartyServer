var room=[];


const createRoom= async (req, res) => {
    console.log("creataaaa")

    //Generating unique id for each room
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'];

    let result = "";
    for (let index = 0; index < 5; index++) {
        result += alphabet[Math.floor(Math.random() * 10000) % 25];
    }
    room =[...room,result]  
    res.json(result);
}


const room_join = async (socket,io) => {
    socket.on('join', async room_id => {
        console.log('user joined', room_id);
        socket.join(room_id);
    })
}

const playPause = async (socket,io) => {
    socket.on('squareClicked', ({ isPlayPause, name, user_id, room_id }) => {
        const playPauseInfo = {
            isPlayPause,
            name,
            user_id,
            room_id,
        };
        console.log(`${name} clicked ${i} square in room ${room_id}`);
        io.to(room_id).emit('palyPauseReceieved', playPauseInfo);
    })
}

const seek = async (socket,io) => {
    socket.on('playAgain', room_id => {
        io.to(room_id).emit('seekRecieved',);
    })
}

module.exports = { createRoom,room_join,playPause,seek}
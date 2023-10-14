const { room_join, seek, playPause, createRoom } = require("../Controllers/controllers")


const controllers=async(socket,io)=>{

    room_join(socket,io)
    seek(socket,io)
    playPause(socket,io)
    createRoom(socket,io)
}

module.exports=controllers
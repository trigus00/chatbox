let express = require('express');
let socket = require('socket.io')
// app set up 
var app = express();
var server = app.listen(4000,function(){
    console.log('listing to request to port 4000')
});

// Static files\
app.use(express.static('public'));

// socket setup
let io = socket(server)
io.on('connection',function(socket){
    console.log('made socket connection',socket.id);

    socket.on('chat',function(data){
        io.sockets.emit('chat',data)
    })
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    })
})
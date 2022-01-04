let express = require('express');
let socket = require('socket.io')
// app set up 
var app = express();
var server = app.listen(4000,function(){
    console.log('listing to request to port 4000')
});

const { Users } = require('./Users');

const users = new Users();

// Static files\
app.use(express.static('public'));

// socket setup
let io = socket(server)
io.on('connection',function(socket){
    console.log('made socket connection',socket.id);
    users.addUser(socket.id);

    socket.on('chat',function(data){
        let user = users.getUser(socket.id);
        let info = {...data, color: user.color }
        console.log(info)
        io.sockets.emit('chat',info)
    })
    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    })
})
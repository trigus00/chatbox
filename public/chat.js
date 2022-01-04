//  make connection 
let socket = io.connect('http://localhost:4000/')
// query dom 
let body = document.querySelector('body');
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let send = document.getElementById('send');
let output =document.getElementById('output')
let feedback = document.getElementById('feedback')

// events 
send.addEventListener('click',function(){
    socket.emit('chat', {
        message: tinymce.get("message").getContent({ format: "text" }),
        handle: handle.value
    });
    message.value = "";
});

body.addEventListener('keypress', function(){
    socket.emit('typing', handle.value);
})

// Listen for events
socket.on('chat', function(data){
    console.log(data);
    feedback.innerHTML = '';
    output.innerHTML += `<p><strong style="color:${data.color}">` + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});


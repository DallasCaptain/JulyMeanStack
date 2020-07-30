const express = require("express");
const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + "/socketFun/dist/socketFun"));

app.use(express.urlencoded({extended: true}));
app.use(express.json())
require('./server/config/routes.js')(app)


io.on('connection', (socket) => {
    console.log('socket opened');
    socket.emit('handshake','hello from server')
    
    socket.on('hello', (user)=>{
        console.log('user said hello:',user)
        //socket.emit('thanks')
        socket.broadcast.emit('newuser', user)
    })
    socket.on('message',(message)=>{
        console.log('new message:', message)
        io.emit('newMessage',message)
    })
});



http.listen(3000, () => console.log("listening on port 3000"));

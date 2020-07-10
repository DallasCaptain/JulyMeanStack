const express = require("express");
const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/',(req,res)=>{
    res.render('index')
})

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('handshake','hello from server')
    

    socket.on('hello', (user)=>{
        console.log('user said hello:',user)
        //socket.emit('thanks')
        socket.broadcast.emit('newuser', user)
    })
});



http.listen(3000, () => console.log("listening on port 3000"));

// configuration file


// git push heroku master
// this will deploy updates on heroku app


require('dotenv').config();
const express = require('express')
const app = express();
const PORT = process.env.PORT;

// establish chat socket server
const socketServer = require('socket.io');

app.set('view engine', 'ejs')
app.set('views','views')

app.use(express.static('public'))

app.use(require('./routes/index'))
app.use(require('./routes/albums'))
app.use(require('./routes/feedback'))
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

let expressServer = app.listen(PORT,()=>{
    console.log(`Running express on port ${PORT}...`);
})

// allowing socket server to listen to incoming requests from express
let io = socketServer(expressServer);

// connect is a keyword in socket.io
// when any client connects with socket connection then this will be triggered
io.on('connect', (socket)=>{
    
    console.log('User connected.');

    // when client send message to server: from 1 client
    socket.on('chat room', (msg)=>{

        // server will broadcast msg out to all connected clients
        console.log(msg);
        io.emit('chat room', msg);

    });

});
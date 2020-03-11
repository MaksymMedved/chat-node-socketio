const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

let PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


io.on('connection', socket => {
    console.log('user connected')
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
    socket.on('add message', (msg) => {
        io.emit('add message', msg);
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
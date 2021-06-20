const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
    return res.send(JSON.stringify({
        hello: 'world'
    }))
})

http.on('connection', (socket)=>{
    console.log('connected to socket Http', socket.id)
})

http.on('disconnect', (socket)=>{
    console.log('disconnected to socket Http', socket.id)
})


// io.on('connection', (socket)=>{
//     console.log('connected to socket', socket)
// })

// io.on('disconnect', (socket)=>{
//     console.log('connected to socket', socket)
// })

http.listen(3000, function() {
    console.log('Listening on port 3000')
})


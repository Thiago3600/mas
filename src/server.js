const socketIo = require('socket.io');
const net = require('net');
var express = require('express');
const http = require('http');

var app = express();

const server = http.createServer(app)
const io = socketIo(server)


app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: '1s860t77r@',
        server: 'THIAGO\\SQL_TNSOFT', 
        database: 'AS_CAD',
        port: 1443,
        trustServerCertificate: true
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select TOP(3) * from AS_CAD..ASCEPBAI', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
        });
    });
});




server.listen(5000, function () {
        console.log('Server is running with socket..');
    })



io.on('connection', (socket) => {
    socket.emit('hello', {
        greeting: 'Hello Thiago'
    })
})

// app.listen(5000, function () {
//     console.log('Server is running..');
// });
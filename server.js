var express = require('express');
var jsonServer = require('json-server');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic(__dirname + '/dist'));
app.use('/api', jsonServer.router('server/db.json'));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);

// WS experiment
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

setInterval(() => io.emit('time', new Date().toTimeString()), 1000);
// END WS experiment

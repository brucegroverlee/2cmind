/**
* src/backend/index.js
*/

//import express from 'express'
/*
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

//import api from './api'

const port = process.env.PORT || 3000
//const app = express()

//app.use('/api', api)

app.use(express.static('_dist/public'))

app.listen(port, function () {
  console.log('Start engine. Listening on port: ' + port + ' for http and websocket')
})
*/
// Setup basic express server
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('Server listening at port %d', port)
});

// Routing
app.use(express.static('_dist/public'))

import api from './api'
app.use('/api', api)

// Chatroom

var numUsers = 0;

io.on('connection', function (socket) {
  console.log('se creo una coneccion de websocket')
  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on('new message', function (data) {
    console.log('se recibio un mensaje')
    console.log(data)
    // we tell the client to execute 'new message'
    socket.emit('new message', {
      author: 'daemon',
      message: 'your daemon heard you'
    })
    console.log('se mando un mensaje')
  })

})
var express = require('express')
var aplicacion = express()

const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
const {StringDecoder} = require('string_decoder')
const decoder = new StringDecoder('utf8')

var HOST = "192.168.43.72"
var PORT = "4000"

// server.listen(PORT, function(){
//     console.log('Servidor activo ' + PORT + ' : ' + HOST)
// })

console.log('Hola Node')

var ser = net.createServer(function(so){
    console.log('Usuario conectado')

    so.on('data', function(data) {
        console.log(data)
        var cent = data
        console.log(decoder.write(cent))  
    })
    so.on('close', function() {
        console.log('Usuario Desconectado')
    })
});
ser.listen(PORT, HOST);

var express = require('express')
var aplicacion = express()

const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
const {StringDecoder} = require('string_decoder')
const decoder = new StringDecoder('utf8')

var HOST = "192.168.43.72"
var PORT = "3000"

// server.listen(PORT, function(){
//     console.log('Servidor activo ' + PORT + ' : ' + HOST)
// })

console.log('Hola Node')

var ser = net.createServer(function(so){
    // so.on('connect', function(){
        console.log('Usuario conectado')
    //})

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

// function hexAscii(data){
//     var hex = data.toString()
//     var x = ''
//     for(var n=0; n < hex.length; n += 2){
//         x += String.fromCharCode(parseInt(hex.substr(n,2),16))
//     }
//     return x
// }
// console.log(hexAscii(data))
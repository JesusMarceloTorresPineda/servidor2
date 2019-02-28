var express = require('express')
var aplicacion = express()

const net = require('net')
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
const {StringDecoder} = require('string_decoder')
const decoder = new StringDecoder('utf8')

var HOST = "marcelo1102.ddns.net"
var PORT = 4000

var ser = net.createServer(function(so){

    console.log('Usuario Nuevo ' + so.remoteAddress + ':' + so.remotePort)

    so.on('data',function(data){
        var cent = data

        so.write("servidor 1");
        console.log(decoder.write(cent));
    })

    so.on('close',function(){
        console.log('usuario desconectado')
    })
})

ser.listen(PORT,function(){
    console.log("servidor activo ")
})

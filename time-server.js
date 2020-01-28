'use strict'

const net = require('net');


const server = net.createServer((socket)=>{

    //socket.write(console.log('test'));

    socket.end(displayDateAndTimeNow() + '\n');
});

server.listen(process.argv[2]);

function displayDateAndTimeNow(){
    var now = new Date();

    return [now.getFullYear(), formatNumber(now.getMonth() + 1), formatNumber(now.getDate())].join("-")
       + " " + [formatNumber(now.getHours()), formatNumber(now.getMinutes())].join(":");
}

function formatNumber(number) {
  return number < 10 ? "0" + number : number;
}

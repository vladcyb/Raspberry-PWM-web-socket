var http = require('http').createServer(handler);

var fs = require("fs");
var io = require("socket.io")(http);
var GPIOPWM = require("pigpio").Gpio;

http.listen(8080);

const { spawn } = require('child_process');
const ip = spawn('hostname', ['-I']);

ip.stdout.on('data', (data) => {
    var data = `${data}`;
    console.log('Open ' + data.trim() + ':8080 in a browser.');
});

function handler (req, res) {

    fs.readFile(__dirname + "/public/index.html", function(err, data){
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end();
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

}

var level = 255;
var turnedOn = false;

var led1 = new GPIOPWM(14, "out");
var led2 = new GPIOPWM(15, "out");
var led3 = new GPIOPWM(18, "out");

var leds = [led1, led2, led3];

io.on("connection", function (socket){

    socket.emit("level", level);
    socket.emit("turnedOn", turnedOn);

    socket.on("click", function(){
        turnedOn = !turnedOn;
        leds.forEach((led) => {
            led.pwmWrite(turnedOn ? level : 0);
        });
        socket.broadcast.emit("turnedOn", turnedOn);
        socket.emit("turnedOn", turnedOn);
    });

    socket.on("slider", function(val){
        level = val;
        if(turnedOn){
            leds.forEach((led) => {
                led.pwmWrite(turnedOn ? level : 0);
            });
        }
        socket.broadcast.emit("level", level);
        socket.emit("level", level);

    });

});

process.on("SIGINT", function(){
    leds.forEach((led) => {
        led.digitalWrite(0);
    });
    process.exit();
});

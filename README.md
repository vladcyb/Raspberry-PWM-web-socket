# Raspberry-PWM-web-socket
https://youtu.be/qfnYDYtpPCc
<table>
<tr><td>
<img width="300px" src="https://user-images.githubusercontent.com/7864131/39412687-0709485c-4c29-11e8-9794-c423e39389e6.png">
<img width="300px" src="https://user-images.githubusercontent.com/7864131/39412686-06e5c49a-4c29-11e8-93ef-ef188dea1ec7.png">
</td></tr>
</table>

Install
-------
```
$ git clone git@github.com:vladcyb/Raspberry-PWM-web-socket.git
$ cd Raspberry-PWM-web-socket
$ npm install socket.io
$ npm install pigpio
```
Run
---
```
$ sudo node server
```
In your browser open a page `your_raspberry_pi_IP:8080`, where your_raspberry_pi_IP is a local IP-address of your Raspberry in the network to which it is connected. You can check it by enter hostname -I in your Raspberry Pi's terminal.

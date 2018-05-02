# Raspberry-PWM-web-socket

https://youtu.be/qfnYDYtpPCc

Control LEDs connected to your Raspberry Pi's GPIO from your browser. The device from which you are opening the page must be connected to the same network as your Raspberry. 
<table>
<tr><td>
<img width="300px" src="https://user-images.githubusercontent.com/7864131/39412687-0709485c-4c29-11e8-9794-c423e39389e6.png">
<img width="300px" src="https://user-images.githubusercontent.com/7864131/39412686-06e5c49a-4c29-11e8-93ef-ef188dea1ec7.png">
</td></tr>
</table>

Preparations
-
Connect 3 LEDs to your Raspberry Pi (14, 15 and 18 GPIO pins)

Install
-------
```
git clone git@github.com:vladcyb/Raspberry-PWM-web-socket.git
sudo apt-get install pigpio
cd Raspberry-PWM-web-socket
npm install socket.io --save
npm install pigpio
```
Run
---
```
sudo node server
```
In your browser open a page `your_raspberry_pi_IP:8080`, where your_raspberry_pi_IP is a local IP-address of your Raspberry in the network to which it is connected. You can check it by enter hostname -I in your Raspberry Pi's terminal.

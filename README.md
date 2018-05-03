# Raspberry-PWM-web-socket

https://youtu.be/qfnYDYtpPCc

Control LEDs connected to your Raspberry Pi's GPIO from your browser. The device from which you are opening the page must be connected to the same network as your Raspberry. 
<table>
<tr><td>
<img width="300px" src="https://user-images.githubusercontent.com/7864131/39595748-01aa4102-4f19-11e8-81cf-0dfe80988ab5.png">
<img width="300px" src="https://user-images.githubusercontent.com/7864131/39584641-91ee51ae-4efb-11e8-8be2-4e3be7cfb9b4.jpg">
</td></tr>
</table>

Preparations
------------
- Connect LEDs to your Raspberry Pi
- In the `leds.txt` enter GPIO numbers that you've connected to the LEDs

Installing
----------
```
git clone git@github.com:vladcyb/Raspberry-PWM-web-socket.git
sudo apt-get install pigpio
cd Raspberry-PWM-web-socket
npm install socket.io --save
npm install pigpio
```
Runnig
------
```
sudo node server
```
In a browser open a page `your_raspberry_pi_IP:8080`, where your_raspberry_pi_IP is a local IP-address of your Raspberry in the network to which it is connected. You can check it by enter hostname -I in your Raspberry Pi's terminal.

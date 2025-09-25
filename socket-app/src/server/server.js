const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline'); // 👈 Correct import

const port = new SerialPort({ 
  path: 'COM5', // 👈 Use the `path` property for the port
  baudRate: 9600 
});
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' })); // 👈 Use the new parser and pipe method
 parser.on('data', data => {
  console.log('Arduino data:', data);
  io.emit('potentiometerValue', parseInt(data));
});

http.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});

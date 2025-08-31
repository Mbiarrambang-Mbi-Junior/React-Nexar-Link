import express, { json } from 'express';
import { SerialPort } from 'serialport';
import cors from 'cors';

const app = express();
const port = 3001;
const serialPath = 'COM5'; // Change this to your Arduino's serial port

app.use(cors());
app.use(json());

const serialPort = new SerialPort({
  path: serialPath,
  baudRate: 115200,
});

serialPort.on('open', () => {
  console.log('Serial Port opened successfully');
});

serialPort.on('error', (err) => {
  console.log('Error: ', err.message);
});

// Endpoint to send a command to the Arduino
app.post('/api/command', (req, res) => {
  const { action } = req.body;
  const command = action === 'on' ? '1' : '0';

  serialPort.write(command, (err) => {
    if (err) {
      return res.status(500).send('Error writing to serial port: ' + err.message);
    }
    res.status(200).send(`Sent command: ${action}`);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
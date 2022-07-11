import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 4000;

app.get('/', (req, res) => {
  res.send('main');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server en el puerto: ${PORT}`);
});

import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 4000;

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Hello',
    env: process.env.MESSAGE || 'localhost',
  });
});

app.get('/ping', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: `Png ${req.headers['x-forwarded-for']}`,
    env: process.env.MESSAGE || 'localhost',
  });
});

app.listen(PORT, () => {
  console.log(`Server en el puerto: ${PORT}`);
});

import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use('*', (req, res) => {
  res.status(404).send({ message: 'not found' });
});

app.listen(3333);

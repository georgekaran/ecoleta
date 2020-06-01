import express, { Request, Response } from 'express';

const app = express();

app.get('/users', (req: Request, res: Response) => {
  console.log('Listagem de usuários')
  res.send({ message: 'Listagem de usuários' })
});

app.listen(3333);
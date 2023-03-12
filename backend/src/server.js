import express from 'express';
import * as dotenv from 'dotenv';
import productsRouter from './routers/productsRouter/productsRouter.js';
import usersRouter from './routers/usersRouter/usersRouter.js';
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded( { extended: true }));

app.get('/', (req, res) => {
    res.send(`BACKEND APP`);
});

app.use('/api/products', productsRouter);

app.use('/api/users', usersRouter);

app.get('*', (req, res) => {
    const url = req.url;
    res.send(`404 ERR - No resource has been found at: <br><strong>${url}</strong></br>`);
});

const server = app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

server.on('error', (err) => console.log(`SERVER ERR! ${err}`));
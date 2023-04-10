import express from 'express';
import * as dotenv from 'dotenv';
import productsRouter from './routers/productsRouter/productsRouter.js';
import usersRouter from './routers/usersRouter/usersRouter.js';
import cartsRouter from './routers/cartsRouter/cartsRouter.js';
import chatsRouter from './routers/chatsRouter/chatsRouter.js';
import cors from 'cors';
import { Server as HttpServer } from 'http';
import { Server as IOServer } from 'socket.io';

dotenv.config();

const app = express();

const httpServer = new HttpServer(app);

const io = new IOServer(httpServer);

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded( { extended: true }));

app.use(express.static("/public"));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'src/public'});
});

app.use('/api/products', productsRouter);

app.use('/api/users', usersRouter);

app.use('/api/carts', cartsRouter);

app.use('/api/chats', chatsRouter);

app.use('*', (req, res) => {
    const url = req.url;
    res.send(`404 Error! Could not access to ${url} because there is no resource at it.`)
});

const server = app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

server.on('error', (err) => console.log(`SERVER ERR! ${err}`));

export default io;
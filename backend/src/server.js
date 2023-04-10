import express from 'express';
import * as dotenv from 'dotenv';
import productsRouter from './routers/productsRouter/productsRouter.js';
import usersRouter from './routers/usersRouter/usersRouter.js';
import cartsRouter from './routers/cartsRouter/cartsRouter.js';
import chatsRouter from './routers/chatsRouter/chatsRouter.js';
import cors from 'cors';
import http from 'http';
import { Server as SocketServer } from "socket.io";

dotenv.config();

const app = express();

const server = http.createServer(app);

const io = new SocketServer(server, {
    cors: {
        origin: 'http://localhost:3000',
    }
});

const port = process.env.PORT || 8080;

app.use(cors());

app.use(express.json());

app.use(express.urlencoded( { extended: true }));

app.use(express.static("/public"));

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'src/public'});
});

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("message", (body) => {
        socket.broadcast.emit("message", {
            body,
            from: socket.id,
        });
        console.log(body);
    });
});

app.use('/api/products', productsRouter);

app.use('/api/users', usersRouter);

app.use('/api/carts', cartsRouter);

app.use('/api/chats', chatsRouter);

app.use('*', (req, res) => {
    const url = req.url;
    res.send(`404 Error! Could not access to ${url} because there is no resource at it.`)
});

server.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

server.on('error', (err) => console.log(`SERVER ERR! ${err}`));

export default io;
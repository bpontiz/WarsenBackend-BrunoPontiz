import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use(express.urlencoded( { extended: true }));

app.use('/', (req, res) => {
    res.send(`BACKEND APP`);
});

const server = app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));

server.on('error', (err) => console.log(`SERVER ERR! ${err}`));
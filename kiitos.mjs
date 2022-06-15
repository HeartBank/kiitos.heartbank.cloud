import http from 'http';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const bot = express();
bot.use(express.static('public'));
bot.use(cors());
bot.use(express.json());
bot.use(express.urlencoded({ extended: true })); 

bot.get('/', (req, res) => {
    res.sendFile('/index.html', { root: dirname(fileURLToPath(import.meta.url)) });
});

bot.post('/', (req, res) => {
    res.json(req.body);
});

http.createServer(bot).listen(333);
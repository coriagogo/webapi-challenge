const express = require('express');

const server = express();

server.use(express.json);
server.use(logger);

server.get('/', (req, res) => {
    res.send(`<h2>Let's do this!`)
});

function logger(req, res, next) {
    const time = new Date();
    console.log(`${req.method} ${req.url} ${time}`)
    next();
};

module.exports = server;
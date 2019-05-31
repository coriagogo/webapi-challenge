const express = require('express');

const projectRoute = require('./projectRoute.js');
const actionsRoute = require('./actionsRoute');

const server = express();

server.use(express.json());

server.use(logger);

server.use('/api/projects', projectRoute);
server.use('/api/actions', actionsRoute);

server.get('/', (req, res) => {
    res.send({messageOfTheDay:process.env.MOTD});
});

function logger(req, res, next) {
    const time = new Date();
    console.log(`${req.method} ${req.url} ${time}`)
    next();
};

module.exports = server;
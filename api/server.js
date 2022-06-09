const express = require('express');

const server = express();

server.get('/', (req,res) => {
    res.send('<h1>Hello, world! - Chance C.<h1>')
})

module.exports = server;
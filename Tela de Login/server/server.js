// Dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Config server
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser());
server.use('/Pages', express.static(__dirname + '/Pages'));
const port = 3000;

// Config Database
const Database = require('./Database');

// Rotas
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/Pages/Index/index.html')
})

server.get('/privado', (req, res) => {
    res.send('Somente usuários logados podem ver essa página')
})

server.listen(port, () => {
    console.log(`Server in port ${port}`);
});
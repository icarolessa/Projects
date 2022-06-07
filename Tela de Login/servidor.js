// Dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Controlador de login
const logar = require('./users/logar')
const logado = require('./users/logado')
const deslogar = require('./users/deslogado')

// Config server
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(cookieParser());
server.use('/pages', express.static(__dirname + '/pages'));
const port = 3000;

// Config Database
const Database = require('./database/database');

// Rotas
server.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index/index.html')
})

server.post('/logar', async (req, res) => {
    res.send(await logar(req.body));
})

server.get('/deslogar', async (req, res) => {
    res.send(await deslogar());
})

server.get('/privado', logado, (req, res) => {
    res.send('Somente usuários logados podem ver essa página')
})

// Port
server.listen(port, () => {
    console.log(`Server in port ${port}`);
});
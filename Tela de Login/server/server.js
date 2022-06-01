const express = require('expres')
const server = express()
const bodyParser = express('body-parser') // verificar se vai precisar
const port = 3000

server.use(bodyParser.json())
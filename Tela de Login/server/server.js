const express = require('express')
const server = express()
const bodyParser = require('body-parser') // verificar se vai precisar
const port = 3000

server.use(bodyParser.json())

server.listen(port, () =>{
    console.log(`Server in port ${port}`)
})
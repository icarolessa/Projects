const express = require('express')
const routeFuncionario = require('./routes/routes')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
routeFuncionario(app)

app.listen(port, () => {
    console.log(`Server on in port ${port}`)
})
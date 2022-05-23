const express = require('express')
const routeFuncionario = require('./routes/routes')
const app = express()
const port = 3000

routeFuncionario(app)

app.listen(port, () => {
    console.log('Server on')
})
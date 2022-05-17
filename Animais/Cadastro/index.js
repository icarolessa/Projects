const express = require('express');                                 // exportando modulo express
const bodyParser = require('body-parser')

const animaisRouter = require('./routes/animaisRoutes');
const port = 3000;                                                  // definindo porta de operação

const app = express();                                              // iniciando aplicação express


app.use(bodyParser.urlencoded({ extended: false }))

animaisRouter(app)

app.get('/', (req, res) => res.send(`Servidor em execução`))        // usando o express para enviar uma resposta
app.listen(port, () => console.log(`Executando na porta ${port}`)); // ativando a porta 2000 para escuta
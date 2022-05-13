const express = require('express');                                 // exportando modulo express
const app = express();                                              // iniciando aplicação express
const port = 2000;                                                  // definindo porta de operação

app.get('/', (req, res) => res.send(`Servidor em execução`))        // usando o express para enviar uma resposta
app.listen(port, () => console.log(`Executando na porta ${port}`)); // ativando a porta 2000 para escuta
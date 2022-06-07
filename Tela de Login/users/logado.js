const jsonwebtoken = require('jsonwebtoken')

async function Logado(req, res, next){
    // usando cookie do navegador
    Auth = res.cookie.Token || null;

    // verificando se o cookie existe
    if(typeof(Auth) == 'undefined' || Auth == '' || Auth == null){
        return res.send({erro: {login: 'não autorizado'}});
    } else {
        // traduzindo o token
        try {
            Token = await jsonwebtoken.verify(Auth, 'SenhaParaProtegerToken');
            next();
        } catch (error) {
            // bloqueia o token, caso não consiga traduzir
            return res.send({erro: {login: 'Não autorizado!'}})
        }
    }
}

module.exports = Logado;
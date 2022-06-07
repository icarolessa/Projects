const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../schemas/user');
const { response } = require('express');
const res = require('express/lib/response');

async function Logar(body){
    // recebe dados do usuario
    const email = body.email;
    const senha = body.senha;

    if(!email || !senha){
        return {erro: 'Dados insuficientes!'};
    }

    // buscando usuário no banco
    Find = await User.find({email, senha})
        .then(response => {
            return response;
        }).catch(erro => {
            return {erro: erro};
        });
    
    // verificando se encontrou o dado
    if(Find == '' || Find.erro){
        return {erro: 'E-mail ou senha incorretos!'};
    }

    Token = await jsonwebtoken.sign({
        id: Find[0]._id,
        nome: Find[0].nome,
        email: Find[0].email,
    }, 'SenhaParaProtegerToken');

    // salvando token no cokie do navegador
    res.cookie('Token', Token);
    res.sendStatus(200);
}

module.export = Logar;
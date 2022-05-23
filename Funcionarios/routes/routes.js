const fs = require('fs')
const { join } = require('path')
const filePath = join(__dirname + 'baseFuncionarios.json')

// método para analisar se existe base de dados
const getFuncionarios = () => {
    const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []

    try {
        return JSON.parse(data)
    } catch (error) {
        return []
    }
}

const pais = func => func.pais === 'China'
const genero = func => func.genero === 'F'
const menorSalario = (acumulador, salarioAtual) => {
    return acumulador.salario < salarioAtual.salario ? acumulador : salarioAtual
}
const maiorSalario = (acumulador, salarioAtual) => {
    return acumulador.salario > salarioAtual.salario ? acumulador : salarioAtual
}

// Definindo rotas
const funcionarioRouter = (app) => {
    app.get('/', (req, res) => {
        res.send('Bem vindo a tela inicial')
    })

    app.get('/funcionarios', (req, res) => {
        const func = getFuncionarios()
        res.send({ func })
    })

    app.get('/funcionarios/menor-salario', (req, res) => {
        const funci = getFuncionarios().reduce(menorSalario)
        res.send({ funci })
    })

    app.get('/funcionarios/maior-salario', (req, res) => {
        const data = getFuncionarios().reduce(maiorSalario)
        res.send(data)
    })

    app.post('/', (req, res) => {
        res.send('Rota post ativada')
    })
}

module.exports = funcionarioRouter
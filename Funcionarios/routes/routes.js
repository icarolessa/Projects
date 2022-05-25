const fs = require('fs')
const filePath = '../base/baseFuncionarios.json'

// método para converter base para json
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

// variáveis para filtro de pesquisa
const pais = func => func.pais === 'China'
const genero = func => func.genero === 'F'
const menorSalario = (acumulador, salarioAtual) => {
    return acumulador.salario < salarioAtual.salario ? acumulador : salarioAtual
}
const maiorSalario = (acumulador, salarioAtual) => {
    return acumulador.salario > salarioAtual.salario ? acumulador : salarioAtual
}

// método para gravar informação no json
const saveFuncionario = (funcionario) => {
    fs.writeFileSync(filePath, JSON.stringify(funcionario))
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

    app.post('/funcionarios/cadastro', (req, res) => {
        const basefuncionario = getFuncionarios()
        
        console.log(req.body)
        basefuncionario.push(req.body)
        
        saveFuncionario(basefuncionario)

        return res.json(req.body)
    })
}

module.exports = funcionarioRouter
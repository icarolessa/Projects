/*
 * Usando filter e reduce para verificar o menor salario da base funcionarios
 */

// base de dados
const bd = require('./baseFuncionarios.json')

// gerando filtros
const pais = f => f.pais === 'China'
const genero = f => f.genero === 'M'
const menorSalario = (menorValor, valorAtual) => {
    return menorValor.salario < valorAtual.salario ? menorValor : valorAtual
}
const salarioDefinido = f => f.salario < 5000

// armazenando pessoas que ganham menos que 5000 reais
const menorDefinido = bd.filter(pais)
                        .filter(genero)
                        .filter(salarioDefinido)

// armazenando filtragem do menor salario
const menorSalar = bd.filter(pais)
                 .filter(genero)
                 .reduce(menorSalario)

// impriindo salarios menores que 5000
console.log('Funcionários com salarios abaixo de R$ 5.000,00: ', menorDefinido)
// imprimindo menor salario
console.log('Funcionário com menor salário: ', menorSalar)
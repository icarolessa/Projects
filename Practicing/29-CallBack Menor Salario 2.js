/**
 * Verificando menor salario com o filter e reduce
 * Verificando os funcionarios que ganham menos de R$ 5.000,00
 */

// importar base de funcionarios
const base = require('./baseFuncionarios.json')

// imprimir base
// console.log(base)

// criação de arow function para funcionários do genero feminino
const pais = func => func.pais === 'China'
const gene = func => func.genero === 'F'
const menorSalario = (menorSalario, salarioAtual) => {
    return menorSalario.salario < salarioAtual.salario ? menorSalario : salarioAtual
}
const salarioDefinido = func => func.salario < 5000

const menorSalarioDefinido = base.filter(pais)
                                 .filter(gene)
                                 .filter(salarioDefinido)

const funcionarioMenorSalario = base.filter(pais)
                                    .filter(gene)
                                    .reduce(menorSalario)

console.log('Funcionários com salário abaixo de R$ 5.000,00: ', menorSalarioDefinido)
console.log('Funcionário com menor salário: ', funcionarioMenorSalario)


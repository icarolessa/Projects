/* Calculando salário líquido usando: 
 * IR: 11%
 * INSS: 8%
 * Sindicato: 5%
 */

const valorHora = 19.00
const horasMes = 160.00
const irrf = 0.11
const inss = 0.08
const sindi = 0.05
const salarioBruto = (valorHora * horasMes).toFixed(2)
const calcIrrf = (salarioBruto * irrf).toFixed(2)
const calcInss = (salarioBruto * inss).toFixed(2)
const calcSindi = (salarioBruto * sindi).toFixed(2)
const descontos = (parseFloat(calcInss) + parseFloat(calcIrrf) + parseFloat(calcSindi)).toFixed(2) // verificar necessidade do parseFloat()
const salarioLiquido = (salarioBruto - descontos).toFixed(2)

console.log('Salario bruto: R$' + salarioBruto)
console.log('- IR (11%): R$' + calcIrrf)
console.log('- INSS (8%): R$' + calcInss)
console.log('- Sindicato (5%): R$' +calcSindi)
console.log('= Salario bruto: R$' + salarioLiquido)
console.log('-------------------------------')
console.log('Total de desconstos: R$ ' + descontos)

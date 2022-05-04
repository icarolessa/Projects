/* Calculando o peso ideal de homem e mulher
 * Formulas:
 *  homens: (72.7*h) - 58
 *  mulheres: (62.1*h) - 44.7
 */

const alturaHomem = 1.75
const alturaMulher = 1.56
const pesoHomem = ((72.7 * alturaHomem) - 58).toFixed()
const pesoMulher = ((62.1 * alturaMulher) - 44.7).toFixed()

console.log(`${pesoHomem}kg é peso ideal para homem de ${alturaHomem}m`)
console.log(`${pesoMulher}kg é o peso ideal para mulher de ${alturaMulher}m`)
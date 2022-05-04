/* Calculando peso ideal
 * Fórmula: pesoIdeal = (72.7*altura) - 58
 */

const altura = 1.56
const pesoIdeal = ((72.7 * altura) - 58).toFixed(2)

console.log(`O peso ideal de uma pessoa de ${altura}m é: ` + pesoIdeal)
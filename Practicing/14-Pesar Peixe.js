/* 
 * O limite do peso do peixe deve ser 50, acima disso é gerado uma multa de R$ 4,00 por kg
 */

const pesoPeixe = 53.0
const limite = 50.0
const valorMulta = 4
const excessoPeso = pesoPeixe - limite
const multa = excessoPeso * valorMulta

console.log(`O peixe possui ${pesoPeixe}kg, passou ${excessoPeso}kg do limite que é de ${limite}kg. A multa gerada é no valor de R$ ${multa}`)
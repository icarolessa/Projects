/* 
 * Programa para qualquer quantidade de tinta para determinando metro quadrado
 * visando o mínimo de disperdício
 */

const metroQuadrado = 100
const qtdTinta = ((metroQuadrado / 6) * 1.1).toFixed(2)
const qtdLata = qtdTinta / 18
const qtdGalao = qtdTinta / 3.6
const valorLata = 80
const valorGalao = 25

// Calculo para misturar latas e galoes
const qtdLatasMenorConsumo = Math.trunc((qtdTinta / 18)).toFixed(2)
const qtdLatasNecessarias = (Math.trunc(qtdLatasMenorConsumo) * 18).toFixed(2)
const restoLata18 = qtdTinta - qtdLatasNecessarias
const qtdGaloesMenorConsumo = Math.trunc((restoLata18 / 3.6)).toFixed(2)

console.log(`Se você comprar somente a lata de 18L, para pintar ${metroQuadrado}m² vai precisar de ${Math.round(qtdLata)} lata(s) de tinta de 18 litros que custa R$${Math.round(qtdLata) * valorLata}`)
console.log(`Se você comprar somente o galão de 3,6L, para pintar ${metroQuadrado}m² vai precisar de ${Math.round(qtdGalao)} galão(ões) de tinta de 3,6 litros que custa R$${Math.round(qtdGalao) * valorGalao}`)
console.log(`Caso queira ter o menor consumo, recomendamos comprar:`)
console.log(`    Lata 18L  : ${qtdLatasMenorConsumo} | Custo: R$${valorLata * qtdLatasMenorConsumo}`)
console.log(`    Galão 3,6L: ${qtdGaloesMenorConsumo} | Custo: R$${valorLata * qtdGaloesMenorConsumo}`)


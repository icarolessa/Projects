/*
 * Programa para qualquer quantidade de lintas para determinado metro quadrado
 */

const tamMetroQuadrado = 60
const tamUmaLataPinta = 18 * 3
const qtdTinta = (tamMetroQuadrado / tamUmaLataPinta).toFixed(2)
const valorLata = 80

if(qtdTinta <= 1){
    console.log(`Para pintar ${tamMetroQuadrado}m², você precisará de ${qtdTinta} lata de tinta de 18L`)
}
else{
    console.log(`Para pintar ${tamMetroQuadrado}m², você precisará de ${qtdTinta} latas de tinta de 18L`)
}
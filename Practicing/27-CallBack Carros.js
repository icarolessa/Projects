/*
 * Usando filtro para buscar a marca e os carros
 */

const carros = ['Gol', 'Uno', 'Golf', 'Creta', 'HB20']
const marcas = ['Volks', 'Fiat', 'Hundai', 'Ford']
const carro = carros.filter(filtarCarro)
const marca = marcas.filter(filtrarMarca)

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

function filtrarMarca(marca){
    return marca === 'Volks'
}

function filtarCarro(carro){ 
    return carro === 'Gol'
}

// imprimindo array de carros
carros.forEach(imprimir)
// imprimindo carro e marca filtrados
console.log(carro, marca)


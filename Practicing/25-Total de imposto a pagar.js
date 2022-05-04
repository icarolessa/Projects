/*
    Calculando imposto conforme o valor do produto e taxa de venda
*/

function somaImposto(custo, taxaImposto){
    const taxaVenda = 1.5
    custo = (custo * taxaVenda) * taxaImposto
    return console.log('Total de imposto a pagar: ' + custo)
}

somaImposto(100, 0.05)
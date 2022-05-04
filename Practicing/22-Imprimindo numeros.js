/* 
    Repetindo impressao conforme o numero digitado:
        1
        2 2
        3 3 3
        n n n n n ... n
*/

function imprimirVezes(numero) {
    let numEscada = []
    for (i=0; i < numero; i++){
        numEscada.push(numero)
    }

    console.log(numEscada)
}

imprimirVezes(1)
imprimirVezes(2)
imprimirVezes(3)
imprimirVezes(4)
imprimirVezes(5)
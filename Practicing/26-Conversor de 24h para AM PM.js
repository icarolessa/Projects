/*
    Convertendo 24h e AM ou PM
*/

function horario(numero){
    if(numero >= 12 && numero < 24){
        return console.log('São ' + (numero - 12).toFixed(2) + ' PM') 
    }
    else{
        if(numero >= 0 && numero < 12){
            return console.log('São ' + (numero) + ' AM')
        }
        else{
            console.log('Horário inválido')
        }
    }
}

horario(9.27)
horario(13.30)

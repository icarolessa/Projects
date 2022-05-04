// Trocando valores das variaveis
let a = 10;
let b = 20;
let temp = 0;

// Modo manual
// a = 20
// b = 10

// Modo com variável temporária
// temp = a;
// a = b;
// b = temp;

// Utilizando técnica do JavaScript
[a,b] = [b,a]

// imprimindo valores trocados
console.log('Novo valor de a: ' + a + ', novo valor de b: ' + b)

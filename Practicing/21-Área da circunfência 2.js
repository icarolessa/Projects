/* 
 * Calculando a área da circunferência
 *  Fórmula: a = pi * raio * raio
*/

const PI = 3.14;
const raioCircunferencia = 10;
const areaCircunferencia = PI * (raioCircunferencia * raioCircunferencia);
const areaCircunferencia2 = PI * (Math.pow(raioCircunferencia, 2)); // usando função matemática
let num = 2;

// imprimindo o valor da área da circunferência
console.log('A área da circunferência é: ' + areaCircunferencia + ' m2');
console.log('A área da circunferência é: ' + areaCircunferencia2 + ' m2');
console.log(Math.pow(num,2));





/**
 * Conversor Celsius para Fahrenheit
 * Fórmula: C = 5 * ((F-32) / 9)
 */

const grausCel = 37
const grausFahr = (grausCel * (9/5) + 32).toFixed(2)

console.log(`${grausCel}°C equivale a ${grausFahr}°F`)

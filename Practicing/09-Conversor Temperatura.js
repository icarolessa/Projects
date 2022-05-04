/**
 * Conversor de Fahrenheit em Celsius
 * Formula: C = 5 * ((F-32) / 9)
 */

const grausFah = 100
const grausCel = (5 * ((grausFah - 32) / 9)).toFixed(2)

console.log(`${grausFah}°F é o mesmo que ${grausCel}°C`)
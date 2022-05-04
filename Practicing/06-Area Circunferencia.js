// Calculando área de uma circunferência

const raioCirculo = 5.5
const areaCirculo = (Math.PI * Math.pow(raioCirculo, 2)).toFixed(2)
const areaCirculoDobrada = (areaCirculo * 2).toFixed(2)

console.log('A área do círculo é: ' + areaCirculo + 'm², o dobro da área é: ' + areaCirculoDobrada + 'm².')
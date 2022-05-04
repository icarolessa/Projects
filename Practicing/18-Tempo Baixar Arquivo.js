/*
 * Calculando tempo de download 
 */

const tamArquivoMb = 100
const veloInternetMbps = 500
const tempoDownload = (tamArquivoMb / veloInternetMbps).toFixed(2)

console.log(`Sua internet de ${veloInternetMbps}Mbps demora ${tempoDownload} segundos para baixar um arquivo de ${tamArquivoMb}Mb`)
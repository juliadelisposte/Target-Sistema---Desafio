const fs = require('fs');

const rawData = fs.readFileSync('faturamento.json');
const faturamento = JSON.parse(rawData);

const diasUteis = faturamento.filter(dia => dia.valor > 0);

const menorFaturamento = Math.min(...diasUteis.map(dia => dia.valor));
const maiorFaturamento = Math.max(...diasUteis.map(dia => dia.valor));

const totalFaturamento = diasUteis.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = totalFaturamento / diasUteis.length;

const diasAcimaDaMedia = diasUteis.filter(dia => dia.valor > mediaMensal).length;

console.log(`📉 Menor faturamento: R$ ${menorFaturamento.toFixed(2)}`);
console.log(`📈 Maior faturamento: R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`📊 Dias acima da média: ${diasAcimaDaMedia}`);

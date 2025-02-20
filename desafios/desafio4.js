// desafio4.js - Percentual de faturamento por estado
const estados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};
const total = Object.values(estados).reduce((acc, val) => acc + val, 0);
Object.entries(estados).forEach(([estado, valor]) => {
    console.log(`Desafio 4 - ${estado}: ${(valor / total * 100).toFixed(2)}%`);
});

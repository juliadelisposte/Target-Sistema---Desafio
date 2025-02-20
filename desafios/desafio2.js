// desafio2.js - Verificar número na sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1, temp;
    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b === num || num === 0;
}

const numero = 21;
console.log(`Desafio 2 - O número ${numero} pertence à sequência de Fibonacci?`, isFibonacci(numero));
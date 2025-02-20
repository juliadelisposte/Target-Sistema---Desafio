// desafio5.js - Inverter string sem usar reverse()
function reverseString(str) {
    let inverted = "";
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}
const stringOriginal = "JavaScript";
console.log("Desafio 5 - String invertida:", reverseString(stringOriginal));

/* Trabaja en los siguientes desafíos y carga tu trabajo cuando hayas terminado.

    1. Imprimir impares 1-20 Usando un bucle, escribe un código que haga que console.logimprima todos los valores impares del 1 al 20.

    2. Disminuir múltiplos de 3 Usando un bucle, escribe un código que haga que console.logimprima todos los valores que sean divisibles de manera uniforme por 3 del 100 al 0.

    3. Imprime la secuencia Usando un bucle, escribe un código que haga que console.log imprima los valores en esta secuencia  4, 2.5, 1, -0.5, -2, -3.5.

    4. Sigma Escribe código que sume todos los valores del 1 al 100 en una variable sum y, al final, console.log dé como resultado 1 + 2 + 3 + ... + 98 + 99 + 100. Deberíamos obtener 5050 al final.

    5. Factorial Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, al final, console.logdé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final. 
*/

// 1. Imprimir impares 1-20
console.log("1. Imprimir impares 1-20");
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
// 2. Disminuir múltiplos de 3
console.log("2. Disminuir múltiplos de 3");
let j = 0;
while (j <= 100) {
    if (j % 3 == 0) {
        console.log(j);
    }
    j++;
}
// 3. Imprime la secuencia
console.log("3. Imprime la secuencia");
for (let i = 4; i >= -3.5; i -= 1.5) {
    console.log(i);
}
// 4. Sigma
console.log("4. Sigma");
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);
// 5. Factorial
console.log("5. Factorial");
let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);

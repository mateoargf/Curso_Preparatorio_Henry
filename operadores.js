//Suma
console.log(3 + 5);

//Resta
console.log(14 - 7);

//Multiplicación
console.log(4 * 6);

//División
console.log(30 / 9);

//Resto
console.log(95 % 4);

//Prueba de precedencia
console.log(3 + 5  * 2 - 8);

console.log((3 + 5 ) * 2 - 8);

//Adición y strings
console.log('HOLA ' + 'CAMILO');
var nombre = 'CAMILO';
var saludo = 'HOLA ' + nombre;
console.log(saludo);

console.log(3 + 4 * 5); // 3 + 20
// Expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// Expected output: 36

let a;
let b;

console.log(a = b = 5);
// Expected output: 5

console.log(3 + 10 * 2);   // muestra 23
console.log(3 + (10 * 2)); // muestra 23 porque los paréntesis son superfluos
console.log((3 + 10) * 2); // muestra 26 porque los paréntesis cambian el orden

a = b = 5; // es igual a escribir a = (b = 5);

a || (b * c);  // evalúa primero `a`, luego produce `a` si `a` es "truthy"
a && (b < c);  // evalúa primero `a`, luego produce `a` si `a` es "falsy"
a ?? (b || c); // evalúa primero `a`, luego produce `a` si `a` no es `null` ni `undefined`
a?.b.c;        // evalúa primero `a`, luego produce `undefined` si `a` es `null` ó `undefined`3 > 2 && 2 > 1
// Retorna `true`

3 > 2 > 1
// Retorna `false` porque 3 > 2 es `true`, luego `true` es convertido a 1
// por coerción de tipos, luego `true` > 1 se convierte en 1 > 1, que es
// `false`. Agregar paréntesis hace que las cosas se vean claras: (3 > 2) > 1.

var suma = 0;
suma = suma + 1;
suma = suma + 2;
suma = suma + 3;
suma = suma + 4;

console.log(suma);

for (var i = 0; i < 5; i++) {
    suma = suma + i;
    console.log('Variable de iteración for ', i);
}

console.log('Variable de suma for ', suma);

while (suma < 3) {
    suma = suma + 1;
    console.log('Variable de suma while ', suma);
}

var Animal = 'Jirafa';
switch (Animal) {
    case 'Vaca':
    case 'Jirafa':
    case 'Perro':
    case 'Cerdo':
        console.log('Este animal subirá al Arca de Noé.');
        break;
    case 'Dinosaurio':
    default:
        console.log('Este animal no lo hará.');
}

var foo = 1;
var output = 'Salida: ';
switch (foo) {
    case 10:
        output += '¿Y ';
    case 1:
        output += 'Cuál ';
        output += 'Es ';
    case 2:
        output += 'Tu ';
    case 3:
        output += 'Nombre';
    case 4:
        output += '?';
        console.log(output);
        break;
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Por favor, selecciona un valor del 1 al 6.');
}

var result = '';
var i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345" 

do {
    i += 1;
    console.log(i);
} while (i < 5);

i = 0;
n = 0;
while (i < 5) {
    i++;
    if (i == 3)
        continue;
    n += i;
    console.log(n);
}

function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
        if (i == 3)
            break;
        i++;
    }
    return i * x;
}
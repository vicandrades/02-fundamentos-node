let nombre = 'deadpool';
let real = 'Wade winston';

console.log(nombre + ' ' + real);

console.log(`${nombre} ${real}`);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`el nombre de: ${ getNombre() }`);
//function sumar(a, b) {
//    return a + b;
//}

//let sumar = (a, b) => a + b;

//function saludar(){
//    return `hola mundo`;
//}

//let saludar = () => `hola mundo`;

//console.log(saludar());

//console.log(sumar(10, 20));

// si quieres acceder a los valores del objeto a la que pertenece la funcion con la palabra reservada this, debe ser una funcion normal y no de flecha como en este ejemplo
let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneración',
    getNombre() {
        return `${ this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());
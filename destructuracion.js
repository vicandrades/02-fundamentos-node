let deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneración',
    getNombre: function() {
        return `${ this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
};

//console.log(deadpool.getNombre());

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

//let { nombre, apellido, poder } = deadpool;

let { nombre: name, apellido: lastname, poder } = deadpool;

console.log(name, lastname, poder);
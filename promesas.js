let empleados = [{
    id: 1,
    nombre: 'victor'
}, {
    id: 2,
    nombre: 'sol'
}, {
    id: 3,
    nombre: 'juan'
}]

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);

        if (!empleadoDB) {
            reject(`no existe un empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
}


let getSalario = (empleado) => {


    return new Promise((resolve, reject) => {
        if (!empleado)
            reject(`User es null`);

        let salario = salarios.find(salario => salario.id === empleado.id);
        if (!salario)
            reject(`no existe un salario para ${empleado.nombre}`);
        //se puede seguir ejecutando lineas de codigo pero el reject o resolve no se ejecutaria mas de una vez asi se llamara en varias ocasiones
        else {
            resolve({
                nombre: empleado.nombre,
                salario: salario.salario
            });
        }
    });

}

/*  version uno por cada promesa se maneja un reject
getEmpleado(3).then(empleado => {
    //console.log(`Empleado de BD`, empleado);

    getSalario(empleado).then(resp => {
        console.log(`el salario del empleado ${resp.nombre} es`, resp.salario);
    }, err => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
});*/


//version dos cualquier error de una promesa va al catch y se ahorran lineas de codigo
getEmpleado(6).then(empleado => {

    return getSalario(empleado);

}).then(resp => {

    console.log(`el salario de ${resp.nombre} es de ${resp.salario}`);

}).catch(err => {
    console.log(err);
});
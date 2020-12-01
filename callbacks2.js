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

let getEmpleado = (id, callback) => {
    //forma 1
    /*    let empleadoDB = empleados.find(empleado => {
                        return empleado.id===id;
                });*/

    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
        callback(`no existe un empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }


}

let getSalario = (empleado, callback) => {

    if (!empleado)
        callback(`no se puede encontrar salario de un user inexistente`);

    let salario = salarios.find(salario => salario.id === empleado.id);
    if (!salario)
        callback(`no existe un salario para ${empleado.nombre}`);
    else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salario.salario
        });
    }
}


getEmpleado(3, (err, empleado) => {
    if (err)
        return console.log(err);


    getSalario(empleado, (err, res) => {
        if (err) {
            return console.log(err);
        }
        console.log(`el salario de ${res.nombre} es de ${res.salario}$`);
    });
});
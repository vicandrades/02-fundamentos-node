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

let getEmpleado = async(id) => {


    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`no existe un empleado con el id ${id}`);
    } else {
        return empleadoDB;
    }
}


let getSalario = async(empleado) => {


    if (!empleado)
        throw new Error(`User es null`);

    let salario = salarios.find(salario => salario.id === empleado.id);
    if (!salario)
        throw new Error(`no existe un salario para ${empleado.nombre}`);
    //se puede seguir ejecutando lineas de codigo pero el reject o resolve no se ejecutaria mas de una vez asi se llamara en varias ocasiones
    else {
        return {
            nombre: empleado.nombre,
            salario: salario.salario
        };
    }

}

let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de ${resp.salario} $`;
}

getInformacion(2).then(mensaje => {
    console.log(mensaje);
}).catch(err => {
    console.log(err);
});
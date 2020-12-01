//setTimeout(() => {
//    console.log('hola mundo');
//}, 3000);

let getUsuarioById = (id, callback) => {

        let usuario = {
            nombre: 'victor',
            id
        }

        if (id === 20) {
            callback(`El usuario de la bd con id ${id}, no existe en la bd`);
        } else {
            callback(null, usuario);
        }

    }
    //llamado a la funcion, recibe 2 parametros id y una funcion (la funcion recibe 2 parametros(err,usuario))
getUsuarioById(20, (err, usuario) => {
    if (err)
        return console.log(err);

    console.log('usuario de bd', usuario);
})
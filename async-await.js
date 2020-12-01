/**
 * Async Await
 */
/* al colocar el async sucede esto tal cual
 let getNombre = () => {
    return new Promise ( (resolve,reject) =>
    {
        resolve('victor');
    });
}*/

/*let getNombre = async() => {
    //throw new Error('No existe nombre');
    return `victor`;
};*/


let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('victor');
        }, 3000);

    });
}

let saludo = async() => {

    let nombre = await getNombre();

    return `hola ${nombre}`;
}


//console.log(getNombre());
saludo().then(mensaje => {
    console.log(mensaje);
})

/*.catch(err => {
    console.log(`error de async`, err);
})*/
const nombre = 'Jonathan';
const apellido = 'Andrade';

var nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hi ${nombre}`;
}

console.log(`Este es un texto ${getSaludo(nombreCompleto)}`);
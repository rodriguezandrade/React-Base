const personajes = ['Goku', 'Vegeta', 'Trunks'];
 const [, , p3] = personajes;
 console.log( p3);

 const retornaArreglo = ()=> ( [
     'ABCD', 127
 ])

const [letras, numeros ] = retornaArreglo();

console.log(letras, numeros);

// const setNombre = (nombre)=>{
//     return `Hola ${nombre}`;
// }
const theState = (nombre)=>([
    nombre, ()=> {console.log(`Hola ${nombre}`)}
])

const [nombre, setNombre ]= theState('Barcelona');

console.log(nombre);
setNombre();
//  console.log(nombre, "the nombre", setNombre);
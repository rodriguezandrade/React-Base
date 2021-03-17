const saludar = function saludar(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
 
const getUser = () => ({ uid: 'ABCD123450', username:'Juan'});

console.log(saludar('Goku'));
console.log(getUser());

function getUsuarioActivo1(nombre){
    return{
        uid:'ADJVMCJE9595',
        username: nombre
    }
}

const usuarioActivo1 = getUsuarioActivo1('Jonathan');

console.log(usuarioActivo1);

const getUsuarioActivo = (nombre)=> ({uid:'AFWOOFIUUIE', username: nombre});
const usuarioActivo = getUsuarioActivo('Mono');
console.log(usuarioActivo);
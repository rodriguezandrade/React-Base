//Desestructuración
// Asignacion des tructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
};

////
const { edad, clave, nombre } = persona;
console.log(edad, clave, nombre, "desestructuracion 1");

////
const retornaPersona = ({ edad, nombre, clave }) => {
    console.log(edad, nombre, clave, "desestructuracion 2");

}

retornaPersona(persona);

///
const theContext = ({ clave , edad}) => ({
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.158
        }
    });


const {nombreClave, anios, latlng} = theContext (persona);

console.log(nombreClave, anios, "desestructuracion 3");
console.log(latlng, "latlng");

///obtener campos anidados
const { latlng: {lat, lng}} = theContext (persona);
console.log(lat, "lat", lng, "lng");


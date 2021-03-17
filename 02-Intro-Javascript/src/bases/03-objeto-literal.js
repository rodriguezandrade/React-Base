const persona = {
    nombre:'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 665625165,
        lat: 14.255,
        lng: 34.5984
    }
}; 

const persona2 = {... persona }
persona2.apellido = 'Quintana';
console.log(persona);
console.log(persona2);
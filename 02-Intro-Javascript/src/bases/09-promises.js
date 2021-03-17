
import { getHeroeByIdExampleWithObject } from './bases/08-export-examples'

//version without async



// const promise = new Promise((resolve, reject)=>{

//     setTimeout(() =>{
//         const heroe= getHeroeByIdExampleWithObject(2);
//         console.log(heroe, "the heroe");
//         // resolve(heroe);
//         reject('no se pudo encontrar el heroe');
//     }, 2000)
// });

// promise.then((heroe)=>{
//     console.log(heroe,"el then de la promesa");
// })
// .catch(err => console.warn(err));






///Async version
const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe =  getHeroeByIdExampleWithObject(id);

            if (heroe.heroe2 !== undefined) { 
                console.log(heroe,"heroeheroeheroe");
                resolve(heroe);
            } else {
                reject('no se pudo encontrar el heroe');
            }
        }, 2000);
    })
}

getHeroeByIdAsync(5)
    .then(heroe => console.log(heroe, "the async promise"))
    .catch( err =>  console.warn(err));

    
 //otra manera de mandar a llamar la referencia   
getHeroeByIdAsync(7)
.then(console.log)
.catch(console.warn);

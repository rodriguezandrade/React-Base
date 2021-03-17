import heroes, {owners} from '../data/heroes'
// import {heroes, owners} from './data/heroes'

console.log(owners, "owners");
console.log(heroes);

const getHeroeById = (id)=> ([heroes.find(x=>x.id === id)]);

console.log(getHeroeById(2), "the normal method heroeById")

const [ heroe ]= getHeroeById(2);

console.log(heroe, "get the method data by desestructuracion")

// const  {id, name} = {...heroe};
// console.log(id, name, "get data ");




//objeto
export const getHeroeByIdExampleWithObject = (id)=> ( {heroe2 :heroes.find(x=>x.id === id)});
const  {heroe2:{id, name}} = getHeroeByIdExampleWithObject(2);
console.log(id, "id", name, "name", "destrucuturar by object");



//array
const getHeroeByIdExampleWithArray = (id)=> ( [{heroe2 :heroes.find(x=>x.id === id)}]);
const  [{heroe2:{id:id2, name:name2}}] = getHeroeByIdExampleWithArray(2);
console.log(id2, "id", name2, "name", "destrucuturar by array ");


/// se nombro a id2 y name2 por que arriba en el get by object se esta utilizando el const similar


//array
const getHeroeByIdExampleWithArrayString = (owner)=> ([heroes.filter(x=>x.owner === owner)]);
const data = getHeroeByIdExampleWithArrayString('DC');
console.log(data, "data", "data by string ");

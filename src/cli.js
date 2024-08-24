import readlineSync from 'readline-sync';

const ReadLine = ()=>{
  const name = readlineSync.question('¿Cuál es tu nombre? ');
console.log(`¡Hola, ${name}!`)
}
export default ReadLine;
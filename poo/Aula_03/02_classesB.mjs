import {Carro} from "./02_classesA.mjs";
const carro = new Carro(45);

console.log(carro.capacidade);
console.log(carro.tanque);

carro.tanque = 10;
console.log(carro.tanque);

carro.tanque = 50;
console.log(carro.tanque);

carro.tanque = 10;
console.log(carro.tanque);

carro.register("Fusca", "ABC-1234");
carro.printCarro();
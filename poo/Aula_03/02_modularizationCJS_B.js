// CommonJS
const circulo = require('./02_modularizationCJS_A.js');
let a = 10;
console.log(`Área do círculo de raio ${a} ${circulo.area(a)}`);

const {area} = require('./02_modularizationCJS_A.js');
let b = 11;
console.log(`Área do círculo de raio ${b} ${area(b)}`);

const Circulo = require('./02_modularizationCJS_C.js');
const c1 = new Circulo(12);
console.log(`Área do círculo de raio ${c1.raio} ${c1.area()}`);
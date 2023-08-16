// ECMAScript6
import {area as ar, circunferencia as circ} from "./02_modularizationES6_A.mjs";
console.log(`Área do círculo de raio 4 é ${ar(4)}`);
console.log(`Circunferência do círculo de raio 4 é ${circ(4)}`);

import * as circulo from "./02_modularizationES6_A.mjs";
console.log(`Área do círculo de raio 5 é ${circulo.area(5)}`);
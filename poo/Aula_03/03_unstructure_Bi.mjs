import {UmaClasse} from "./03_unstructure_Be.mjs";

let umaClasse = new UmaClasse("Primeiro Atributo");

let {capturaPrimeiroAtributo: umAtributo, outroAtributo} = umaClasse;;

console.log("um Atributo: " + umAtributo);
console.log("outro Atributo: " + outroAtributo);

let maisUmaClasse = new UmaClasse("Outro Atributo");
console.log(JSON.stringify(maisUmaClasse));
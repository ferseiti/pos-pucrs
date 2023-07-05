let nomeCompleto = ["Fernando", "Seiti", "Furusato"];
var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log("O primeiro nome é: " + primeiroNome);
console.log("O nome do meio é: " + nomeDoMeio);
console.log("O último nome é: " + ultimoNome);

var [primeiroNome, ...restante] = nomeCompleto;
console.log("O primeiro nome é: " + primeiroNome);
console.log("O restante é: " + restante);

var [soOPrimeiroNome, , soOUltimoNome] = nomeCompleto;
console.log("O primeiro nome é: " + soOPrimeiroNome);
console.log("O último nome é: " + soOUltimoNome);
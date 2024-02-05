// Closure
function somaValores(x){
    return function(y){
        return x + y;
    }
}
console.log(somaValores(1)(2)); // 3
// O mesmo que
var soma3 = somaValores(1);
console.log(soma3(2)); // 5

var soma1 = somaValores(1);
var soma2 = somaValores(2);
console.log(soma1(2)); // o retorno de somaValores é uma função, recebendo o parâmetro y, neste caso, 2
console.log(soma2());

// Arrow function (lambda)
var somar = (x, y) => {return(x + y);}
// O mesmo que 
var somar2 = (x, y) => x + y;
console.log("Somar: " + somar(10, 2));

console.log("Somar2: " + somar2(10, 2));

// Função anônima
var funcaoAnonima = function() {return('Função anônima');}
console.log(funcaoAnonima());

// Função de alta ordem com array
var numeros = [1, 2, 3, 5, 8, 13, 20, 21, 32, 50];
var numeros2 = [10, 20, 30, 40, 50, 110, 200, 1080];
console.log(numeros);
var regraDez = (item) => item%10 == 0;
console.log("Existe número divisível por 10: " + numeros.some(regraDez));
console.log("Filtrando números divisíveis por 10: " + numeros.filter(regraDez));

console.log(numeros2);
console.log("Todos números divisíveis por 10: " + numeros2.every(regraDez));

console.log(numeros.slice(5, 8))
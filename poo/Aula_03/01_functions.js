// Closure
function somaValores(x){
    return function(y){
        return x + y;
    }
}

var soma1 = somaValores(1);
var soma2 = somaValores(2);
console.log(soma1(2)); // o retorno de somaValores é uma função, recebendo o parâmetro y, neste caso, 2
console.log(soma2());

// Arrow
var somar = (x, y) => x + y;
console.log(somar(10, 2));
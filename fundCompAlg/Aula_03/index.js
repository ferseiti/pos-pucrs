console.log('Hello World!');
console.log('Fundamentos de computação e algoritmos');

function verificaParidade(limiteSuperior){
    for(let i=0; i<limiteSuperior; ++i){
        if(i%2==1){
            console.log(i+' é ímpar');
        } else {
            console.log(i+' é par');
        }
    }

}

verificaParidade(20);
// Fábrica de Objetos

function criarPessoa(){
    return {
        nome: "Fulano",
        profissao: "Programador",
        anoNascimento: 1990,
        calculaIdade: function () {
            return new Date().getFullYear() - this.anoNascimento;
        }
    };
};

const pessoa0 = criarPessoa();
console.log(pessoa0);

// Construtor de objeto

function Pessoa1 () {
    this.nome = "Fulano";
    this.anoNascimento = 1990;
    this.calculaIdade = function () {
        return new Date().getFullYear() - this.anoNascimento;
    }
}

const pessoa1 = new Pessoa1();
console.log(pessoa1);
pessoa1.calculaIdade()
console.log(pessoa1.calculaIdade());

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
}

// Protótipo

const pessoa = new Pessoa('João', 20);
console.log(pessoa);

const p2 = Object.getPrototypeOf(pessoa);
console.log(p2);

p2.setNome('Maria');
p2.setIdade(30);
console.log(p2);

// Método estático
class Conta {
    static PI = 3.1415;
    static soma(x, y) {
        return x + y;
    }
    static sayHello() {
        console.log("Hello!");
    }
};

class MaisConta extends Conta {
    static soma(x, y, z) {
        return z+ x + y + 1;
    }
}

console.log("Soma de 1 + 2 = " + Conta.soma(1, 2));
Conta.sayHello();
console.log("PI = " + Conta.PI);

console.log(MaisConta.soma(MaisConta.PI, 3, 4))
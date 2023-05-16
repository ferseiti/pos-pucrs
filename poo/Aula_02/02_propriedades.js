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
    ola() {
        console.log("Olá!");
    }
}
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

console.log("Soma de 1 + 2 = " + Conta.soma(1, 2));
Conta.sayHello();
console.log("PI = " + Conta.PI);

// Propriedades privadas

class Estudante extends Pessoa {
    #matricula;
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.#matricula = matricula;
        this.#ola();
    };
    #ola() {
        super.ola();
        console.log("Olá, sou um estudante!");
    }
    setMatricula(matricula) {
        this.#matricula = matricula;
    }
    getMatricula() {
        return this.#matricula;
    }
}

const estudante = new Estudante('João', 20, 123);
console.log(estudante.getMatricula());

a = 10110101;
pim = Math.PI;
console.log(`hello, ${a} and ${pim}`);
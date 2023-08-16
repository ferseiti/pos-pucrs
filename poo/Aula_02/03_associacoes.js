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

// Associação entre classes e objetos

class Nota{
    #grau;
    constructor(disciplina, grau) {
        this.disciplina = disciplina;
        this.#grau = grau;
    };
    setGrau(grau) {
        if (grau < 0 || grau > 10) {
            throw new Error("Nota inválida!");
        };
        this.#grau = grau;
    };
    getGrau() {
        return this.#grau;
    };
};

class Estudante extends Pessoa{
    #matricula;
    notas = [];
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.#matricula = matricula;
        this.#ola();
    };
    getMatricula() {
        return this.#matricula;
    };
    setMatricula(matricula) {
        this.#matricula = matricula;
    };
    #ola() {
        super.ola();
    };
    addNota(nota) {
        this.notas.push(nota);
    }
};

const aluno1 = new Estudante('João', 20, 123);
aluno1.addNota(new Nota('POO', 10));
console.log(aluno1.notas);
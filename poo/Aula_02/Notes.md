
## Objetos
Existem basicamente 4 formas de se criar objetos em JavaScript:
- Objeto Literal
- Fábrica de Objetos
- Construtor de Objetos
- Classes

## Objeto Literal

Não é criado a partir de uma classe, apenas instanciado com todos os seus membros já definidos.
    
```javascript
let pessoa = {
    nome: "Fulano",
    idade: 0,
    anoNascimento: 1990,
    calculaIdade: function () {
        this.idade = 2020 - this.anoNascimento;
    }
}
```
### Fábrica de objetos
É uma função que cria e retorna objetos literais, também independente de classes.

```javascript
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

```

### Construtores de Objetos

É uma função que cria e retorna objetos, mas é necessário usar o operador `new` para instanciar um objeto.

```javascript
function Pessoa () {
    this.nome = "Fulano";
    this.idade = 0;
    this.anoNascimento = 1990;
    this.calculaIdade = function () {
        this.idade = 2020 - this.anoNascimento;
    }
}
```

### Protótipos

Depende do conceito de herança no JS.

```javascript
Object.getPrototypeOf();
```

### Classes

Método estático é um método DA CLASSE, não do objeto.
Ou seja, é possível chamar o método sem instanciar a classe.
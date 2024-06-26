# Notas da Aula de Fund Comp Alg
## Tipos de variáveis em JS
- let: variável dentro de um escopo
- const: variável imutável dentro de um contexto
- var: variável **global**!

## Operações primitivas
- Atribuição de variáveis
- Chamadas de métodos
- Operações aritméticas
- Acesso a um arranjo
- Retorno de método

## Complexidade de Algoritmos

Pode levar em consideração vários aspectos da execução do programa. Normalmente leva-se em consideração o tempo de execução e a quantidade de memória utilizada.

No geral, estima-se o custo computacional de um código através da complexidade, pela quantidade de operações (primitivas) executadas. Um código sem laços, com 5 operações, executa cada operação apenas 1 vez, gerando uma complexidade O(5).

### No geral, considerando um array de tamanho n:
- Um laço percorrendo o array tem complexidade O(n)
- Um laço dentro de outro laço, percorrendo o array, tem complexidade O(n^2)
- Um laço cujo custo reduz pela metade a cada iteração tem complexidade O(log n).

## Estruturas de dados
- Array, em JS, também é uma classe. Então pode ser instanciada tanto com `[]` quanto pela chamada da classe `Array()`
- shift vs pop: shift remove e retorna o primeiro elemento e pop remove e retorna o último elemento do array.

### Lista comum vs encadeada
Para fazer operações do tipo inserção e remoção deelementos, em uma lista comum, é necessário fazer o shift de elementos após as operações. O mesmo não é verdadeiro para listas encadeadas.

### Árvores
- Nodo folha é o nodo sem filhos, também conhecido como nodo externo
- Nodo galho é o nodo com filhos, também conhecido como nodo interno
- Raíz é o nodo no nível 0 da árvore, que não tem pai
- Nodos filhos têm apenas 1 pai
- Nodos pai podem ter n filhos, n >= 0

#### Árvores Binárias
- Um nodo pode ter até 2 filhos (0 <= n >= 2)
- Árvore binária própria ou cheia: cada nodo tem 0 **ou** 2 filhos.
- Busca em profundidade:
    - Caminhamento pré-fixado em árvore binária: retorna o valor a cada acesso
    - Caminhamento pós-fixado em árvore binária: navega até a folha, apresenta o valor e assim sucessivamente até não haver mais filhos. Então apresenta o valor do pai, de cada subárvore.
    - Caminhamento central: apresenta o valor do filho da esquerda, depois do pai, depois do filho da direita.
- Busca em largura:
    - Visita os nodos em ordem dos níveis da árvore, da esquerda para a direita.
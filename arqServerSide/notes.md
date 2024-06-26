# Arquitetura Server Side

Server side é onde se executa, basicamente, o back-end de uma aplicação. É onde se executa o código que não é visível para o usuário, como a lógica de negócio, a comunicação com o banco de dados, etc.

## Exemplo de servidor express

- Criar o diretório
- Executar `npm install express` no diretório em questão
- Executar `npm init` no mesmo diretório para criar o arquivo `package.json`

Após os passos descritos acima, pode-se perceber a criação de um diretório chamado `node_modules`, onde serão instaladas as dependências do projeto. Além disso, o arquivo `package.json` foi criado, onde se pode definir as dependências do projeto.

Os comandos do servidor podem ser definidos em package.json. Por exemplo, para iniciar o servidor, pode-se adicionar o seguinte trecho ao arquivo:

```json
"scripts": {
    "start": "node server.js"
}
```

### Nodemon

Para que não seja necessário reiniciar o servidor constanemente, uma facilidade é instalar o `nodemon`, que reinicia o servidor automaticamente sempre que um arquivo é modificado. Para isso, basta executar `npm install nodemon` no diretório do projeto e adicionar o seguinte trecho ao arquivo `package.json`:

```json
"scripts": {
    "start": "nodemon server.js"
}
```

É possível instalar um módulo npm globalmente, com a utilização do argumento `-g` no comando `npm install`.


### Express Generator

Outra ferramenta útil para criação de projetos Express é o `express-generator`. Para instalar, basta executar `npm install express-generator -g`. Para criar um projeto, basta executar `express nomeDoProjeto`. O comando cria um diretório com o nome do projeto, diretórios e arquivos pertinentes a um projeto, e instala as dependências necessárias.

Muita coisa é facilitada. Por exemplo, algumas rotas são criadas como exemplo, para que se consiga criar outras posteriormente nos mesmos moldes.
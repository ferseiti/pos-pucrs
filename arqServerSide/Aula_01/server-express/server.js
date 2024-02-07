const express = require("express");

const app = express();
const port = 8080;

// Definindo as rotas REST
app.get('/', (req, res) => {
    res.send('<h1>Hello World, Hello Fernando -- Express<h1>\n');
});

app.get('/rota', (req, res) => {
    res.send(`ROTA - Hello World | Express again`);
});

app.get('/fernando', (req, res) => {
    res.send(`Fsf - Hello World | Express again`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
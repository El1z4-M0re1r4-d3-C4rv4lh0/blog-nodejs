const express = require('express') //acessa tudo da biblioteza express

// Express aplicativo - configurando o acesso as funções da biblioteca
const app = express();

// Registrar a vizualização da engenharia ejs
app.set('view engine', 'ejs');

// Ouvindo as requisições na porta
app.listen(3001);

// Acessando uma rota
app.get('/', (req, res) => {
    res.render('index');
});

// Nova rota
app.get('/sobre', (req, res) => {
    res.render('sobre');
});

// Rota de redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('/sobre');
});

// ERRO 404
app.use((req, res) => { 
    res.status(404).render('404');
});
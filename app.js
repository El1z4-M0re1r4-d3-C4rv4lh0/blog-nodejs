const express = require('express') //acessa tudo da biblioteza express

// Express aplicativo - configurando o acesso as funções da biblioteca
const app = express();

// Registrar a vizualização da engenharia ejs
app.set('view engine', 'ejs');

// Ouvindo as requisições na porta
app.listen(3001);

// Acessando uma rota
app.get('/', (req, res) => {

    // Passando parâmetros para o body
    const blogs = [
        {titulo: 'Chamander', conteudo: 'A ponta do seu rabo está constantemente em chamas e se for apagada pode resultar em sua morte'},
        {titulo: 'Squirtle', conteudo: 'Seu casco reduz a resistência contra a água fazendo com que ele nade mais rápido'},
        {titulo: 'Bulbasaur', conteudo: 'Ao evoluir o bulbo começa a desabrochar até se tornar uma grande flor na evolução final'},
    ];

    res.render('index', { titulo: 'Home', blogs});
});

// Nova rota
app.get('/sobre', (req, res) => {
    res.render('sobre', { titulo: 'Sobre'});
});

// Rota de redirecionamento de página
app.get('/sobrenos', (req, res) => {
    res.redirect('/sobre');
});

// Rota da criação do conteúdo
app.get('/blog/criar', (req, res) => {
    res.render('criar', { titulo: 'Criar novo Blog'});
});

// ERRO 404
app.use((req, res) => { 
    res.status(404).render('404', { titulo: '404'});
});
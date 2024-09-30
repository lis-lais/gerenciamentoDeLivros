const prompt = require('prompt-sync')();

function mostrarMenuBuscarLivro() {
    console.log(`
        ----Opção de Busca----
        1. Título
        2. Autor
        3. Ano
        4. Gênero
    `);
};
    
function menuOptionsBuscarLivro(opcao, books){
    let resultado = [];
    switch (opcao.trim()) {
        case '1':
            const termoTitulo = prompt('Digite o título desejado: ');
            resultado = books.filter(book => book.title.toLowerCase().includes(termoTitulo.toLowerCase()));
            break;
        case '2':
            const termoAutor = prompt('Digite o autor desejado: ');
            resultado = books.filter(book => book.author.toLowerCase().includes(termoAutor.toLowerCase()));
            break;
        case '3':
            const termoAno = prompt('Digite o ano desejado: ');
            resultado = books.filter(book => book.year.includes(termoAno));
            break;
        case '4':
            const termoGenero = prompt('Digite o gênero desejado: ');
            resultado = books.filter(book => book.genre.toLowerCase().includes(termoGenero.toLowerCase()));
            break;
        default:
            console.log('Opção inválida.');
            return [];
    }
    return resultado;
};

module.exports = {mostrarMenuBuscarLivro, menuOptionsBuscarLivro };
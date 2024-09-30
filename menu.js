const prompt = require('prompt-sync')();
const { adicionarLivro, listarLivro, atualizarLivro, removerLivro, buscarLivro } = require('./cadastrarLivro.js');

function mostrarMenu() {
    console.log(`
        ---------Menu---------
        1. Adicionar livro
        2. Listar livro
        3. Atualizar livro
        4. Remover livro
        5. Buscar livro
        6. Sair
    `);
};

function menuOptions(opcao){
    switch (opcao.trim()) {
        case '1':
            adicionarLivro();
            break;
        case '2':
            listarLivro();
            break;
        case '3':
            atualizarLivro();
            break;
        case '4':
            removerLivro();
            break;
        case '5':
            buscarLivro();
            break;
        case '6':
            console.log('Saindo do programa...');
            process.exit();
            break;
        default:
            console.log('Opção inválida. Tente novamente.');
            mostrarMenu();
    }
};

function menuLoop() {
    while (true) {
        mostrarMenu();
        const opcao = prompt('Digite a opção desejada: ').trim();
        menuOptions(opcao);
    }
};

module.exports = {mostrarMenu, menuOptions, menuLoop};
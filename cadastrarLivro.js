const prompt = require('prompt-sync')();
const { mostrarMenuBuscarLivro, menuOptionsBuscarLivro } = require('./menuBuscar.js');

let books = [];

function novoLivro(callback) {
    const title = prompt('Title: ');
    const author = prompt('Author: ');
    const year = prompt('Year: ');
    const genre = prompt('Genre: ');

    const book = {
        id: Date.now(),
        title: title.trim(),
        author: author.trim(), 
        year: year.trim(),
        genre: genre.trim(),
    };

    callback(book);
};

function adicionarLivro() {
    novoLivro((book) => {
        let existe = false;
        for (let i = 0; i < books.length; i++) {
            if (books[i].title === book.title && books[i].author === book.author) {
                existe = true;
                break; 
            }
        }

        if (existe) {
            console.log('Já existe com essas informações.');
        } else {
            books.push(book);
            console.log('Livro adicionado com sucesso!');
        }  
    });
};

function listarLivro() {
    if (books.length === 0) {
        console.log('Nenhum livro cadastrado.');
        return;
    }
    console.log('Livros cadastrados:');
    console.log(books);
};

function atualizarLivro() {
    if (books.length === 0) {
        console.log('Nenhum livro cadastrado.');
        return;
    }
    const id = prompt('Insira o id do livro que deseja atualizar: ');
    let index = -1;
    
    for (let i = 0; i < books.length; i++) {
        if (books[i].id.toString() === id.trim()) { //converte o id para string
            index = i;
            break;
        }
    }

    const book = books[index];

    if (index === -1) {
        console.log('Livro não encontrado.');
        return;
    }

    const novoTitle = prompt(`Título (atual: ${book.title})`);
    const novoAuthor = prompt(`Autor (atual: ${book.author})`);
    const novoYear = prompt(`Ano (atual: ${book.year})`);
    const novoGenre = prompt(`Gênero (atual: ${book.genre})`);
    
    books[index] = {
        id: book.id,
        title: novoTitle.trim()  || book.title, 
        author: novoAuthor.trim() || book.author,
        year: novoYear.trim() || book.year,
        genre: novoGenre.trim() || book.genre,
    };
    
    console.log('Livro atualizado com sucesso!');
};

function removerLivro() {
    if (books.length === 0) {
        console.log('Nenhum livro cadastrado.');
        return;
    }
    const id = prompt('Insira o id do livro que deseja remover: ');
    let index = - 1;

    for (let i = 0; i < books.length; i++) {
        if (books[i].id.toString() === id.trim()) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        console.log('Livro não encontrado.');
        return;
    } else {
        books.splice(index, 1);
        console.log('Livro removido com sucesso!');
    }
};

function buscarLivro(){
    console.log(books);
    mostrarMenuBuscarLivro();
    const opcao = prompt('Digite a opção desejada: ').trim();
    //const termo = prompt('Digite o termo desejado: ');
    const resultados = menuOptionsBuscarLivro(opcao, books);

    console.log('Livros encontrados:');
    if (resultados.length > 0) {
        resultados.forEach((book, index) => {
        console.log(`${index + 1}. ID: ${book.id}, Título: ${book.title}, Autor: ${book.author}, Ano: ${book.year}, Gênero: ${book.genre}`);
        });
    } else {
        console.log('Nenhum livro encontrado com esse termo.');
    }
}

module.exports = {
    adicionarLivro, listarLivro, atualizarLivro, removerLivro, buscarLivro
};

import Material from './Material.js';

class Livro extends Material {
    _isbn = undefined;
    _editora = undefined;

    constructor(isbn, editora, autor, data_publicacao, categoria) {
        super(autor, data_publicacao, categoria);
        this._isbn = isbn;
        this._editora = editora;
    }

    get getIsbn() {
        return this._isbn;
    }

    get getEditora() {
        return this._editora;
    }

    set setIsbn(isbn) {
        this._isbn = isbn;
    }

    set setEditora(editora) {
        this._editora = editora;
    }

    toString() {
        return `Livro[isbn: ${this._isbn}, 
                editora: ${this._editora}, 
                ${super.toString()}]`;
    }

    editarLivro(isbn, editora, autor, data_publicacao, categoria) {
        this.setAutor = autor;
        this.setDataPublicacao = data_publicacao;
        this.setCategoria = categoria;
        this.setIsbn = isbn;
        this.setEditora = editora;
    }
}

export default Livro;

class Biblioteca{

    _material = [];

    constructor(){
    }

    get getMaterial(){
        return this._material
    }

    addMaterial(materiais){
        this.materiais.push(materiais);
    }

    editartMaterial(index){
        const material = this.materials[index];
        let op = prompt("Informa o que deseja editar:\n1 - Autor\n2 - Data de Publicação\n3 - Categoria");
        switch (op){
            case "1":
                let autor = prompt("Informe o novo autor:");
                material.EditartMaterial("autor",autor);
                break;
            case "2":
                let data = prompt("Informe a nova data de publicação:");
                material.EditartMaterial("data_publicacao",data);
                break;
            case "3":
                let categoria = prompt("Informe a nova categoria:");
                material.EditartMaterial("categoria", categoria);
                break;
            default:
                alert("Opção inválida!");
                return;
        }
    }

    excluirMaterial(){
        this._material.pop();
    }

    toString(){
        return `Biblioteca[${this._material.map(m => m.toString()).join(", ")}]`;
    }
}


class Material {
    _autor = undefined;
    _data_pulicacao = undefined;
    _categoria = undefined;

    constructor(autor, data_publicacao, categoria) {
        this._autor = autor;
        this._data_pulicacao = data_publicacao;
        this._categoria = categoria;
    }

    get getAutor() {
        return this._autor;
    }

    get getDataPublicacao() {
        return this._data_pulicacao;
    }

    get getCategoria() {
        return this._categoria;
    }

    set setAutor(autor) {
        this._autor = autor;
    }

    set setDataPublicacao(data_publicacao) {
        this._data_pulicacao = data_publicacao;
    }

    set setCategoria(categoria) {
        this._categoria = categoria;
    }

    toString() {
        return `autor: ${this._autor},
                data_publicacao: ${this._data_pulicacao},
                categoria: ${this._categoria}`;
    }
}

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

class Artigos extends Material {
    #referencias = []
    #localizacao

    constructor(referencias, localizacao, autor, data_publicacao, categoria) {
        super(autor, data_publicacao, categoria);
        this.#referencias.push(referencias);
        this.#localizacao = localizacao
    }

    set setReferencias(referencia) {
        this.#referencias.push(referencia);
    }

    get getReferencias() {
        return this.#referencias;
    }

    set setLocalizacoes(localizacao) {
        this.#localizacao = localizacao;
    }

    get getLocalizacoes() {
        return this.#localizacao;
    }

    toString() {
        return `Artigo[${super.toString()}, 
               referencias: ${this.#referencias}, 
               localização:${this.#localizacao}]`;
    }
}

class Periodicos extends Material {
    _edicoes = undefined;
    _artigos = [];
    constructor(edicoes, artigo, autor, data_publicacao, categoria) {
        super(autor, data_publicacao, categoria);
        this._edicoes = edicoes;
        this._artigos.push(artigo);
    }

    set setEdicao(edicao) {
        this._edicoes = edicao;
    }

    get getEdicoes() {
        return this._edicoes;
    }

    set setArtigos(artigo) {
        this._artigos.push(artigo);
    }
    get getArtigos() {
        return this._artigos;
    }

    exibitArtigos() {
        return `Artigos[${this._artigos}]`;
    }

    toString() {
        return `Periódico[${super.toString()}, 
               edições: ${this._edicoes}, 
               artigos: ${this._artigos}]`;
    }
}

class Orientador {
    #nome;
    #data_nascimento;
    #formacao;

    constructor(nome, data_nascimento, formacao) {
        this.#nome = nome;
        this.#data_nascimento = data_nascimento;
        this.#formacao = formacao;
    }

    set setNome(nome) {
        this.#nome = nome;
    }

    get getNome() {
        return this.#nome;
    }

    set setDataNascimento(data_nascimento) {
        return this.#data_nascimento = data_nascimento;
    }

    get getDataNascimento() {
        return this.#data_nascimento;
    }

    set setFormacao(formacao) {
        this.#formacao = formacao;
    }

    get getFormacao() {
        return this.#formacao;
    }

    toString() {
        return `Orientador[
        nome: ${this.#nome},
        data_nascimento: ${this.#data_nascimento},
        formacao: ${this.#formacao}]`
    }
}

class trabalhoAcademico extends Material {
    #instituicao_de_origem;
    #orientadores = [];

    constructor(autor, data_publicacao, categoria, inistituicao_origem, orietador) {
        super(autor, data_publicacao, categoria);
        this.#instituicao_de_origem = inistituicao_origem;
        this.#orientadores.push(orientador);
    }

    set setInstituicaoOrigem(instituicao_origem) {
        this.#instituicao_de_origem = instituicao_origem;
    }

    get getInstituicaoOrigem() {
        return this.#instituicao_de_origem;
    }

    set setOrientadores(orientador) {
        this.#orientadores.push(orientador);
    }

    get getOrientadores() {
        return this.#orientadores;
    }

    getOrientadores() {
        return `Orientadores[${this.#orientadores}]`
    }

    toString() {
        return `TrabalhoAcadêmico[${super.toString()}, 
        instituicao_origem: ${this.#instituicao_de_origem}, 
        orientadores: ${this.#orientadores}]`;
    }
}

const biblioteca = Biblioteca();
function menu(){
    let opcao = prompt(
        "Escolha uma opção:\n" +
        "1 - Criar um Livro\n" +
        "2 - Criar um Trabalho Acadêmico\n" +
        "3 - Criar um Periódico\n" +
        "4 - Sair"
    );
    main(opcao);
}

function main(opcao) {
    while (true) {

        if (opcao === "4") {
            alert("Saindo...");
            break;
        }

        switch (opcao) {
            case "1":
                
                let infos_livro = prompt(
                    "Insira os dados do livro separados por ':' (isbn,editora,autor,data publicação,categoria)"
                );
                let dados_livro = infos_livro.split(":");
                const livro = new Livro(
                    dados_livro[0],
                    dados_livro[1],
                    dados_livro[2],
                    dados_livro[3],
                    dados_livro[4]
                );
                alert("Livro Criado!\n"+livro.toString());
                biblioteca.addMaterial(livro);
                menu();
                break;

            case "2":
                
                let orientador_nome = prompt("Digite o nome do orientador:");
                let orientador_data_nascimento = prompt(
                    "Digite a data de nascimento do orientador (dd/mm/yyyy):"
                );
                let orientador_formacao = prompt(
                    "Digite a formação do orientador:"
                );

                const orientador = new Orientador(
                    orientador_nome,
                    orientador_data_nascimento,
                    orientador_formacao
                );
                alert("Orientador criado:");
                alert(orientador.toString());

                let infos_trabalho = prompt(
                    "Insira os dados do trabalho acadêmico separados por ':' (autor,data_publicacao,categoria,instituicao_de_origem)"
                );
                let dados_trabalho = infos_trabalho.split(":");

                const trabalhoAcademicoCriado = new trabalhoAcademico(
                    dados_trabalho[0],
                    dados_trabalho[1],
                    dados_trabalho[2],
                    dados_trabalho[3],
                    orientador
                );
                alert("Trabalho Acadêmico criado:");
                alert(trabalhoAcademicoCriado.toString());
                biblioteca.addMaterial(trabalhoAcademicoCriado);
                break;

            case "3":
                
                let infos_artigo = prompt(
                    "Insira os dados do artigo separados por ':' (referencia,localizacao,autor,data_publicacao,categoria)"
                );
                let dados_artigo = infos_artigo.split(":");

                const artigo = new Artigos(
                    dados_artigo[0],
                    dados_artigo[1],
                    dados_artigo[2],
                    dados_artigo[3],
                    dados_artigo[4]
                );
                alert("Artigo criado:");
                alert(artigo.toString());
                biblioteca.addMaterial(artigo);

                let infos_periodico = prompt(
                    "Insira os dados do periódico separados por ':' (edicao,autor,data_publicacao,categoria)"
                );
                let dados_periodico = infos_periodico.split(":");

                const periodico = new Periodicos(
                    dados_periodico[0],
                    artigo,
                    dados_periodico[1],
                    dados_periodico[2],
                    dados_periodico[3]
                );
                alert("Periódico criado:");
                alert(periodico.toString());
                biblioteca.addMaterial(periodico);
                break;

            default:
                alert("Opção inválida! Tente novamente.");
        }
    }
}

menu();


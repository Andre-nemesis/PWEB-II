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

    EditartMaterial(index){
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

    ExcluirMaterial(){
        this._material.pop();
    }

    toString(){
        return `Biblioteca[${this._material.map(m => m.toString()).join(", ")}]`;
    }
}




class Category{
    constructor(id, description){
        this._id = id;
        this._description = description;
    }

    set id(value){
        this._id = value;
    }

    set description(value){
        if(typeof value!=='string' || value.trim() === ''){
            throw new Error('Name must be a non-empty string');
        }
        this._description = value;
    }

    get id(){
        return this._id;
    }

    get description(){
        return this._description;
    }

    toString(){
        return `Category(${this._id}, ${this._description})`;
    }
}
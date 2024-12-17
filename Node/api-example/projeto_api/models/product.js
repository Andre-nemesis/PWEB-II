class Product {
    constructor(id, name, price, category) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._category = category;
    }

    // Getters
    // pode usar getId tbm, vai diferênciar a forma como vai ser utilizada
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get category() {
        return this._category;
    }

    // Setters
    set id(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('ID must be a positive integer');
        }
        this._id = value;
    }

    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Name must be a non-empty string');
        }
        this._name = value;
    }

    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Price must be a positive number');
        }
        this._price = value;
    }

    set category(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Category must be a non-empty string');
        }
        this._category = value;
    }

    // representação em string da classe
    toString() {
        return `Produto:[id = "${this.id}", name = "${this.name}", price = "${this.price}", category = "${this.category}"]`;
    }
}

export default Product;
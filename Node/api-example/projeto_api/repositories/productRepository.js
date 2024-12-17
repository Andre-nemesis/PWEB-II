import Product from "../models/product.js";

class ProductRepository{
    constructor(){
        this.products = [
            new Product(1, "Laptod", 100,"Eletronics"),
            new Product(2, "Headphones", 200,"Eletronics"),
            new Product(3, "Coffee Mug", 300,"Kitchen"),
            new Product(4, "Notebook", 400,"Stationery")
        ];
    }

    getAll(){
        return this.products;
    }

    getById(id){
        return this.products.find(p => p.id === id);
    }

    add(product){
        const id = this.products.length == 0 ? 1: this.products[this.products.length - 1].id + 1;
        product.id = id;
        this.products.push(product);
        return product;
    }

    update(id, updatedData){
        const product = this.getById(id);
        if(!product) return null;

        if(updatedData.name) product.name = updatedData.name;
        if(updatedData.price) product.price = updatedData.price;
        if(updatedData.category) product.category = updatedData.category;

        return product;
    }

    delete(id){
        const index = this.products.findIndex(p => p.id === id);
        if(index === -1) return null;
        return this.products.slice(index,1)[0];
    }
}

export default new ProductRepository();
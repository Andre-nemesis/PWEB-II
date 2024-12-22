import Category from '../models/category.js';

class CategoryRepository{
    constructor(){
        this.categories = [
            new Category(1, "Eletronics"),
            new Category(2, "Kitchen"),
            new Category(3, "Stationery")
        ];
    }

    getAll(){
        return this.categories;
    }

    getById(id){
        return this.categories.find(c => c.id === id);
    }

    add(category){
        const id = this.categories.length ==  0 ? 1 :  this.categories[this.categories.length - 1].id + 1;
        category.id = id;
        this.categories.push(category);
        return category;
    }

    update(id, updatedData){
        const category = this.getById(id);
        if(!category) return null;

        if(updatedData.description) category.description = updatedData.description;

        return category;
    }

    delete(id){
        const index = this.categories.findIndex(c => c.id === id);
        if(index === -1) return null;
        return this.categories.splice(index,1)[0];
    }
}

export default new CategoryRepository();

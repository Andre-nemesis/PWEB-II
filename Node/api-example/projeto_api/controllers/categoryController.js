import Category from '../models/category.js';
import categoryRepository from "../repositories/CategoryRepository.js";

export const getCategoryById = (req, res) => {
    const { id } = req.params;

    const category = categoryRepository.getById(Number(id));

    if (!category) {
        return res.status(404).json({ error: "Category not found" });
    }

    res.json(category);
};

export const listCategories = (req, res) => {
    const {description, page = 1, limit = 10 } = req.query;

    let categories = categoryRepository.getAll();

    if (description) {
        categories = categories.filter(
            category => category.description.toLowerCase() === description.toLowerCase()
        );
    }

    const start = (page - 1) * limit;
    const paginatedCategories = categories.slice(start, start + parseInt(limit));

    res.json({ total: categories.length, page, limit, data: paginatedCategories })
};

export const createCategory = (req, res) => {
    const { description } = req.body;

    if (!description) {
        return res.status(400).json({ error: "Description are required" });
    }

    const newCategory = new Category(null,description);
    const addedCategory = categoryRepository.add(newCategory);

    res.status(201).json(addedCategory);
};

export const updateCategory = (req, res) => {
    const id  = parseInt(req.params.id);
    const {description} = req.body;

    const updatedCategory = categoryRepository.update(id,{description});

    if(!updatedCategory){
        return res.status(404).json({ error: "Category not found" });
    }

    res.json(updatedCategory);
};

export const deleteCategory = (req, res) => {
    const id = parseInt(req.params.id);

    const deletedCategory = categoryRepository.delete(id);

    if(!deletedCategory){
        return res.status(404).json({ error: "Category not found" });
    }

    res.status(204).json();
};

import Product from "../models/product.js";
import productRepository from "../repositories/productRepository.js";

export const getProductById = (req, res) => {
    const { id } = req.params;

    const product = productRepository.getById(Number(id));

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
};

export const listProducts = (req, res) => {
    const { category, page = 1, limit = 10 } = req.query;

    let products = productRepository.getAll();

    if (category) {
        products = products.filter(
            product => product.category.toLowerCase() === category.toLowerCase()
        );
    }

    const start = (page - 1) * limit;
    const paginatedProducts = products.slice(start, start + parseInt(limit));

    res.json({ total: products.length, page, limit, data: paginatedProducts })
};

export const createProducts = (req, res) => {
    const { name, category, price } = req.body;

    if (!name || !category || !price) {
        return res.status(400).json({ error: "Name, category and price are required" });
    }

    const newProduct = new Product(null,name, category, price);
    const addedProduct = productRepository.add(newProduct);

    res.status(201).json(addedProduct);
};

export const updateProduct = (req, res) => {
    const id  = parseInt(req.params.id);
    const {name,category,price} = req.body;

    console.log(`${id} ${name} ${category} ${price} `)

    const updatedProduct = productRepository.update(id,{ name, category, price });

    if(!updatedProduct){
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProduct);
};

export const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);

    const deletedProduct = productRepository.delete(id);

    if(!deletedProduct){
        return res.status(404).json({ error: "Product not found" });
    }

    res.status(204).json();
};
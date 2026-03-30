const productService = require('../services/Product.service');

exports.getAll = async (req, res) => {
    const products = await productService.getAll();
    res.json(products);
};

exports.getById = async (req, res) => {
    const product = await productService.getById(req.params.id);

    if (!product) {
        return res.status(404).json({ message: 'Produto não encontrado' });
    }

    res.json(product);
};

exports.create = async (req, res) => {
    const product = await productService.create(req.body);
    res.status(201).json(product);
};
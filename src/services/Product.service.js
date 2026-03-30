const Product = require('../models/Product');

exports.getAll = async () => {
    return await Product.find();
};

exports.getById = async (id) => {
    return await Product.findById(id);
};

exports.create = async (data) => {
    return await Product.create(data);
};
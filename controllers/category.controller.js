const Category = require("../models/category.model");

exports.createCategory = async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        await newCategory.save();
        res.status(200).json({cat:newCategory});
    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send(categories);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).send();
        }
        res.status(200).send(category);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).send();
        }
        res.status(200).send(category);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).send();
        }
        res.status(200).send(category);
    } catch (err) {
        res.status(500).send(err);
    }
};

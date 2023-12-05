const Product = require('../models/product.model');

exports.createProduct = async (req, res) => {
    const { product, category, price, description, image } = req.body;

    try {
        const newProduct = new Product({
            product,
            category,
            price,
            description,
            image
        });

        await newProduct.save();
        res.json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al intentar crear el producto.');
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find().populate("category");
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los productos.');
    }
};

exports.getProductsByCategory = async (req, res) => {
    try {
        // Assuming req.params.category is the ObjectId of the category
        const categoryId = req.params.category;
        const products = await Product.find({ category: categoryId }).populate("category");

        if (!products.length) {
            return res.status(404).json({ msg: 'No products found for this category.' });
        }

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener los productos por categoría.');
    }
};


exports.updateProduct = async (req, res) => {
    const { product, category, price, description, image } = req.body;
    
    try {
        let updatedProduct = await Product.findById(req.params.id);

        if (!updatedProduct) {
            return res.status(404).json({ msg: 'Producto no encontrado.' });
        }

        updatedProduct.product = product;
        updatedProduct.category = category;
        updatedProduct.price = price;
        updatedProduct.description = description;
        updatedProduct.image = image;

        updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProduct, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al actualizar el producto.');
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({ msg: 'Producto no encontrado.' });
        }

        await Product.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Producto eliminado con éxito.' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al eliminar el producto.');
    }
};




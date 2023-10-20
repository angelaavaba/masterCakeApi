const { router } = require("../app");
const { router } = require("../routes");

const Product = require("../models/product.model").Product;

exports.createProduct = async(req,res) =>{
    try{
        let product;

        product = new Product(req.body);

        await product.save();
        res.send(product);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');

    }
}

exports.getProducts = async(req,res) => {
    try{

        const products = await Product.find();
        res.json(products)

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');

    }
}

exports.updateProduct = async(req,res) =>{

    try{

        const{product,category, price, description} = req.body;
        let products = await Product.findById(req.params.id);

        if(!products){
            res.status(404).json({msg: 'No existe el articulo'})
        }

        products.product = product;
        products.category = category;
        products.price = price;
        products.description = description;

        products = await Product.findOneAndUpdate({_id: req.params.id},products,{new:true})
        res.json(articulos);


    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


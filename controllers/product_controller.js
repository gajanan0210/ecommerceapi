// IMPORTING PACKAGE/MODEL 
const Product = require('../models/product');

// EXPORTING MODULE To create a product 
module.exports.create = async function(req, res) {
    try {
        
        let product = await Product.create(req.body);
        return res.status(201).json({
            success: true,
            message: "Product added successfully",
            data:{
                name : product.name,
                quantity : product.quantity,
            }
        });
    } catch (error) {
        return res.status(500).json ({
            message: error.message
        });
    }
}

// EXPORTING MODULE To load all the products 
module.exports.getProducts = async function(req, res) {
    try {
        let product = await Product.find({});
        return res.status(200).json({
            success: "true",
            message: "List of products",
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

// EXPORTING MODULE To update a product
module.exports.update = async function(req, res) {
    try {
        console.log(req.params.id);
        console.log(req.query);
        let product = await Product.findByIdAndUpdate({_id :req.params.id},
            {
                quantity : req.query.quantity
            }
        ,{new:true});
        console.log(product);
        return res.status(200).json({
            status: "true",
            message: "Product Updated",
            data:{
                product
            },
        })
    } catch (error) {
        return res.status(500).json ({
            message: error.message
        })
    }
}

// EXPORTING MODULE To delete a product
module.exports.delete = async function(req, res) {
    try {
        // console.log(req.params);
        let product = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            success: "true",
            message: "Product deleted successfully"
        })
    } catch (error) {
        return res.status(500).json ({
            message: error.message
        })
    }
}

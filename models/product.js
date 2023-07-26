//IMPORTING PACKAGE
const mongoose = require('mongoose');

//CREATING SCHEMA
const productSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    quantity:{
        type: Number,
        require: true
    }
},{
    timestamps: true
})

// EXPORTING MODEL 
const Products = mongoose.model('Products',productSchema);
module.exports = Products;
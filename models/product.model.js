const { StringModule } = require("@faker-js/faker");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({

    type:{ String
    }, 
    price: {
        type: Number
    },
    desciption :{
        type:String
    }

}, {timestamps: true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
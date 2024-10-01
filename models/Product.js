const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, recquired: true },
    slug: { type: String, recquired: true, unique : true },
    desc: { type: String, recquired: true },
    img: { type: String, recquired: true },
    category: { type: String, recquired: true },
    size: { type: String, recquired: true },
    color: { type: String, recquired: true },
    price: { type: Number,  recquired: true },
    availableQty: { type: Number, recquired: true } 
    
}, {timestamps:true})

mongoose.models = {}

export default mongoose.model("product" , ProductSchema)
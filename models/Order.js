// getting-started.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: { type: String, recquired: true },
    address: { type: String, recquired: true },
    amount: { type: Number, recquired: true },
    status: { type: String, default : pending , recquired: true },
    products: [
        {
            productId : {type : String },
            quantity : {type:number , default : 1}

        }
    ]
}, {timestamps:true});

mongoose.models = {}

export default mongoose.model("order" , OrderSchema)
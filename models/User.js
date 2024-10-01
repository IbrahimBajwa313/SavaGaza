// getting-started.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, recquired: true },
    email: { type: String, recquired: true, unique : true },
    password: { type: String, recquired: true },
    
    
}, {timestamps:true})

mongoose.models = {}

export default mongoose.model("user" , UserSchema)
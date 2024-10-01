// pages/api/getProducts.js

import connectDB from "../middleware/mongoose";
import Product from "@/models/Product";

const handler = async (req, res) => {
  try {
    const { sortBy } = req.query;

    let products;

    if (sortBy === 'highToLow') {
      products = await Product.find().sort({ price: -1 });
    } else if (sortBy === 'lowToHigh') {
      products = await Product.find().sort({ price: 1 });
    } else {
      // Default: no sorting
      products = await Product.find();
    }

    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default connectDB(handler);

// http://localhost:3000/api/getProducts (No sorting)
// http://localhost:3000/api/getProducts?sortBy=highToLow (Sort by high-to-low price)
// http://localhost:3000/api/getProducts?sortBy=lowToHigh (Sort by low-to-high price)

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import connectDB from "@/middleware/mongoose"
// import Product from "@/models/Product"

//   const handler = async (req, res) => {

//     let products = await Product.find()
//     res.status(200).json({ products })

//   }
//   export default connectDB(handler)








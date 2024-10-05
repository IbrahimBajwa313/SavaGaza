import mongoose from "mongoose";

// Connection string for MongoDB
export const connectionSrt = "mongodb+srv://ibrahimbajwa1065:ABib381381@cluster0.bathrnt.mongodb.net/SGC?retryWrites=true&w=majority";

// Middleware for connecting to the database
const connectDB = handler => async (req, res) => {
  // Check if already connected
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  
  // Connect to the database
  await mongoose.connect(connectionSrt);
  return handler(req, res);
};

export default connectDB;


import mongoose from "mongoose";
export const connectionSrt = "mongodb+srv://ibrahimbajwa1065:ABib381381@cluster0.bathrnt.mongodb.net/dbProduct?retryWrites=true&w=majority"
const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  await mongoose.connect(connectionSrt, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  )
  return handler(req, res)
}

export default connectDB;







import mongoose from "mongoose";
const {Schema} = mongoose
const productsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  brand: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  }
});

const Products = mongoose.model("Product", productsSchema);

export default Products;

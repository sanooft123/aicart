const mongoose = require('mongoose');

// Define the order schema
const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  items: {
    type: [String],
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
});

// Create the order model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  orderItems: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      required: true,
    },
    orderPrice: {
      type: Number,
      required: true,
    },
  }],

  shippingAddress: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  paymentMethod: {
    type: String,
    default: "Cash on Delivery",
  },
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
    default: "pending",
  },
},
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema)
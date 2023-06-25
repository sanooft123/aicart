import Order from "@/models/order";
import { connectToDatabase } from "@/utils/dbConnect";

connectToDatabase();

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const { orderId, item } = req.body;
    const order = await Order.findOne({ orderId: orderId });

    let totalPrice = 0;
    if (order) {
      let orderItems = [...order.items, item];
      if (item === "Lays") {
        totalPrice += 5;
      } else if (item === "Chicken Noodles") {
        totalPrice += 100;
      }
      await Order.updateOne(
        { orderId: orderId },
        {
          items: orderItems,
          totalPrice: order.totalPrice + totalPrice,
        }
      );
    } else {
      const items = [item];

      if (item === "Lays") {
        totalPrice += 5;
      } else if (item === "Chicken Noodles") {
        totalPrice += 100;
      }
      await Order.create({
        orderId: orderId,
        items: items,
        totalPrice: totalPrice,
      });
    }

    return res.send({ success: true });
  } else if (req.method === "GET") {
    const { orderId } = req.query;
    const order = await Order.findOne({ orderId: orderId });
    return res.send({ order: order, success: true });
  }
}

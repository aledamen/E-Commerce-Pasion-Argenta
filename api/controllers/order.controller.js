const OrderService = require("../services/order.services");

class OrderController {
  static async findAllOrders(req, res) {
    try {
      const orders = await OrderService.findAllOrders();
      return res.status(200).send(orders);
    } catch (error) {
      console.log(error);
    }
  }

  static async findById (req,res) {
    try {
       const order = await OrderService.findById(req.params.id)
       return res.status(200).send(order);
    } catch (error){
        console.log(error);
    }
}

static async findByUserId (req,res) {
  try {
     console.log("byuserid")
     const order = await OrderService.findByUserId(req.params.id)
     return res.status(200).send(order);
  } catch (error){
      console.log(error);
  }
}
}

module.exports = OrderController
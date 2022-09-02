const Products = require("../models/Products");
const Users = require("../models/Users");
const Orders = require("../models/Orders");
const ObjectId = require("mongodb").ObjectId;
const sendEmail = require("../utils/mailer.utils");

class UserService {
  static async createUser(body) {
    try {
      const user = new Users(body);
      sendEmail(user, 0);
      console.log("++++", user);
      return await user.save();
    } catch (error) {
      console.log(error);
    }
  }

   static async addFavorites(id,fav) {
    try {
    //   const user = await Users.find({_id: ObjectId(id),"favorites._id": ObjectId(fav)});
    //   const product = await Products.findById(fav._id, {name: 1, description: 1, img: 1, price: 1});

    //   if (user.length > 0) {
    //     return
    //   } 
    // return await Users.findOneAndUpdate({ _id:id },{ $push: { favorites: product } }, { new: true } );
    // // return Products.findOne({_id : fav})
    return await Users.findByIdAndUpdate(id,
      {
          $addToSet: {
              favorites: fav,
          },
      },
      { new: true }
  )
    
    } catch (error) {
      console.log(error);
    }
  }

  static async deleteFavorite(id, pid) {
    try {
      return await Users.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $pull: { favorites: { _id: pid } } },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
  }
  
  static async getAllUsers() {
    try {
      return await Users.find({}).sort({ username: 1 });
    } catch (error) {
      console.log(error);
    }
  }
  static async getUser(id) {
    try {
      return await Users.findOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }

  static async userModify(body) {
    try {
      return await Users.updateOne({ _id: body.id }, { $set: body.mod });
    } catch (error) {
      console.log(error);
    }
  }

  static async putToAdmin(id) {
    try {
     const user=  await Users.findOne({_id:id})
     console.log("*************",user);
      if(user.isAdmin) return Users.updateOne({_id:id},{isAdmin: false})
      if(user.isAdmin===false) return Users.updateOne({_id:id},{isAdmin: true})
      // return await Users.updateOne(
      //   { _id: body.id },
      //   { $set: { isAdmin: body.toggle } }
      // );
    } catch (error) {
      console.log(error);
    }
  }

  static async addToCart(id, { pid, amount }) {
    try {
      const user = await Users.find({
        _id: ObjectId(id),
        "cart._id": ObjectId(pid),
      });
      const product = await Products.findById(pid, {
        name: 1,
        description: 1,
        img: 1,
        price: 1,
      });


      if (user.length > 0) {
        return Users.findOneAndUpdate(
          { _id: ObjectId(id), "cart._id": ObjectId(pid) },
          { $inc: { "cart.$.amount": amount } },
          { new: true }
        );
      } else {
        return Users.findOneAndUpdate(
          { _id: id },
          {
            $push: {
              cart: {
                _id: product._id,
                name: product.name,
                img: product.img,
                price: product.price,
                amount: amount,
              },
            },
          },
          { new: true }
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async removeFromCart(id, pid) {
    try {
      return await Users.findOneAndUpdate(
        { _id: ObjectId(id) },
        { $pull: { cart: { _id: ObjectId(pid) } } },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async findInCart(id, pid) {
    try {
      return await Users.find({ _id: ObjectId(id), "cart._id": ObjectId(pid) });
    } catch (error) {
      console.log(error);
    }
  }

  static async modifyCart(id, { pid, amount }) {
    try {
      return await Users.updateOne(
        { _id: ObjectId(id), "cart._id": ObjectId(pid) },
        { $set: { "cart.$.amount": amount } }
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async checkoutOk(id, total) {
    try {
      const cartOk = await Users.findById(id, { cart: 1, _id: 0 });
      const cartUpdate = await Users.updateOne(
        { _id: ObjectId(id) },
        { $set: { cart: [] } }
      );
      const orderOk = await Orders.create({ order: cartOk.cart });

      let orderUpdate = await Orders.updateOne(
        { _id: ObjectId(orderOk._id) },
        { $set: { userId: id } },
      );
      orderUpdate = await Orders.updateOne(
        { _id: ObjectId(orderOk._id) },
        { $set: { total: total } }
      );

     const result = await Users.findOneAndUpdate(
        { _id: id },
        {
          $push: {
            orders: orderOk,
          },
        },
        { new: true }
      );
      sendEmail(result, 1, orderOk._id);
      return result

    } catch (error) {
      console.log(error);
    }

  }

  static async deleteUser(id) {
    try {
      return await Users.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserService;

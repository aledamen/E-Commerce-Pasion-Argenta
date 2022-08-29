const Products = require("../models/Products");
const Users = require("../models/Users");
const ObjectId = require("mongodb").ObjectId;
//fix
class UserService {
  static async createUser(body) {
    try {
      const user = new Users(body);
      return await user.save();
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

  static async putToAdmin(body) {
    try {
      return await Users.updateOne(
        { _id: body.id },
        { $set: { isAdmin: body.toggle } }
      );
    } catch (error) {
      console.log(error);
    }
  }

  static async addToCart(id, { pid, amount }) {
    try {
      const user = await Users.find({_id: ObjectId(id),"cart._id": ObjectId(pid),});
      const product = await Products.findById(pid, {name: 1, description: 1, img: 1,});
      
      if (user.length > 0) {
        return Users.updateOne(
          { _id: ObjectId(id), "cart._id": ObjectId(pid) },
          { $inc: { "cart.$.amount": amount } }
        );
      } else {
        return Users.updateOne(
          { _id: id },
          {
            $push: {
              cart: {
                _id: product._id,
                name: product.name,
                img: product.img,
                amount: amount,
              },
            },
          }
        );
      }
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

  static async deleteUser(id) {
    try {
      return await Users.deleteOne({ _id: id });
    } catch (error) {
      console.log(error);
    }
  }
}
 
module.exports = UserService
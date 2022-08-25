const Products = require("../models/Products");
const Users = require("../models/Users");

class UserService {
    static async createUser (body) {
        try{
            const user = new Users(body);
            return await user.save()
        } catch (error){
            console.log(error);
        }
    }

    static async getAllUsers () {
        try{
             return await  Users.find({}).sort({ username: 1 })
        } catch (error) {
            console.log(error);
        }
    }
     static async getUser (id) {
        try{
                return await Users.findOne({ _id: id })
        } catch (error) {
            console.log(error);
        }
    }

    static async userModify(body) {
        try {
            return await Users.updateOne({_id:body.id},{$set:body.mod})
        } catch (error) {
            console.log(error);
        }
    }

    static async putToAdmin (body) {
        try {
            return await Users.updateOne({_id: body.id},{$set:{isAdmin: body.toggle}})
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteUser (id) {
        try {
            return await Users.deleteOne({ _id: id })
        } catch (error) {
            console.log(error);
        }
    }
}
 
module.exports = UserService
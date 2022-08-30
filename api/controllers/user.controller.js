const UserService = require ("../services/user.services")

class UserController {

  static async createUser (req, res) {
    try{
        const user = await UserService.createUser(req.body)
        return res.status(201).send(user)
    } catch (error) {
        console.log(error);
    }
}

static async getAllUsers (req, res) {
    try{
        const users = await UserService.getAllUsers()
        if (!users) return res.status(404).send('Users not found')
        return res.status(200).send(users)     
    } catch (error) {
        console.log(error);
    }
}

static async getUser (req, res) {
    try{
        const user = await UserService.getUser(req.params.id)
        if (!user) return res.status(404).send('User not found')
        return res.status(200).send(user)     
    } catch (error) {
        console.log(error);
    }
}


static async addToCart (req, res) {
    try{
        const product = await UserService.addToCart(req.params.id, req.body)
        if (!product) return res.status(404).send('User not found')
        return res.status(201).send(product)     
    } catch (error) {
        console.log(error);
    }
    }
    

static async getFavorites (req,res) {
    try{
        const user = await UserService.getUser(req.params.id)
        if (!user) return res.status(404).send('User not found') 
        return res.send(user.favorites)
    } catch (error) {
        console.log(error);
    }
}

static async addFavorites (req,res) {
    try{
        const user = await UserService.addFavorites(req.body.id,req.body.favorites)
        if (!user) return res.status(404).send('User not found') 
        return res.send(user)
    } catch (error) {
        console.log(error);
    }
}

static async removeFromCart(req, res) {
    try{
        const product = await UserService.removeFromCart(req.params.id, req.body.pid)
        if (!product) return res.status(404).send('User not found')
        return res.status(201).send(product)     
    } catch (error) {
        console.log(error);
    }
    }
    
static async userModify (req,res) {
    try{
        const user = await UserService.userModify(req.body)
        return res.status(204).send(user)
    } catch (error) {
        console.log(error);
    }
}


static async modifyCart (req, res) {
    try{
        const updated = await UserService.modifyCart(req.params.id, req.body)
        if (!updated) return res.status(404).send('User not found')
        return res.status(201).send(updated)     
    } catch (error) {
        console.log(error);
    }
    }
    
static async putToAdmin (req,res) {
    try{
        const user = await UserService.putToAdmin(req.body)
        return res.status(204).send(user)

    } catch (error) {
        console.log(error);
    }
}


static async findInCart (req, res) {
    try{
        const obj = await UserService.findInCart(req.params.id, req.body.pid)
        if (!obj) return res.status(404).send('User not found')
        return res.status(200).send(obj)     
    } catch (error) {
        console.log(error);
    }
}

static async deleteUser (req,res) {
    try{
        const user = await UserService.deleteUser(req.params.id)
        return res.status(204).send(user)
    } catch (error) {
        console.log(error);
    }
}

}

module.exports = UserController;
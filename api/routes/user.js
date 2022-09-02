const express = require('express')
const UserController = require('../controllers/user.controller')
const router = express.Router()

router.post('/register/', UserController.createUser)

router.get('/all/', UserController.getAllUsers)

router.get('/:id', UserController.getUser)

router.get('/favorites/:id', UserController.getFavorites)

router.put('/addfavorite/:id', UserController.addFavorites)

router.put('/removefavorite/:id', UserController.deleteFavorite)

router.put('/modify/', UserController.userModify)

router.put('/toadmin/:id', UserController.putToAdmin)

router.put('/checkoutok/:id', UserController.checkoutOk)

router.put('/addtocart/:id', UserController.addToCart)

router.put('/removefromcart/:id', UserController.removeFromCart)

router.put('/modifycart/:id', UserController.modifyCart)

router.get('/findincart/:id', UserController.findInCart)

router.delete('/delete/:id', UserController.deleteUser)

module.exports = router

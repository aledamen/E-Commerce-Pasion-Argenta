const express = require("express")
const router = express()
const bcrypt = require("bcrypt")
const User = require("../models/Users")
const jwt = require('jsonwebtoken')
const {validateAuth} = require('../middlewares/auth')
const AuthController = require('../controllers/auth.controller')



//ruta para loguear un usuario
router.get('/me', validateAuth, (req, res) =>res.send(req.user))
router.post('/signup', AuthController.signUp)
router.post('/login', AuthController.logIn)
router.post('/logout', AuthController.logOut)

// router.post("/login" ,(req,res)=>{
//     const {email, password} = req.body
//     console.log(email,password)
//      User.findOne({email})
//      .then(user => {
//          if (!user) res.status(404).json({ msj: "Usuario no encontrado" })
//          else {
//              if (bcrypt.compareSync(password, user.password)) {
//             let token = jwt.sign({user}, 'albondiga', { expiresIn: '7d' })
//                 res.json({user,token})
//             }
//             else{
//                 res.status(401).json({msj: "Password inválido"})
//             }
//         }
//     })
//     .catch(err => res.status(500).json(err))
// })

module.exports = router
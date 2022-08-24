const express = require("express")
const router = express.Router()
const bcrypt= require("bcrypt")



//ruta para loguear un usuario
router.post("/login" ,(req,res)=>{
    const {email, password} = req.body
    console.log(email,password)
     User.findOne({email})
     .then(user => {
        if(!user) res.status(404).json({msj: "Usuario no encontrado"})
        else{
            if(bcrypt.compareSync(password, user.password)) {
                let token = jwt.sign({user}, 'albondiga', {expiresIn: '7d'})
                res.json({user, token})
            }
            else{
                res.status(401).json({msj: "Password inválido"})
            }
        }
    })
    .catch(err => res.status(500).json(err))
})


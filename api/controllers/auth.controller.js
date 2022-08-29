const UserService = require('../services/user.services')
const { validateToken, generateToken } = require('../utils/auth.utils')
const User = require('../models/Users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AuthController {
    static async signUp(req, res) {
        const user = await UserService.createUser(req.body)
        if (user) {
            const token = generateToken({ _id:user._id, username: user.username, email: user.email})
            const payload = validateToken(token)
            req.user = payload
            res.cookie('token', token,{ maxAge: 900000} )
            res.status(201).send(user)
        }else res.sendStatus(400)
    }

    static async logIn(req, res) {
        const user = await User.findOne({ email: req.body.email, status: true })
        if (!user) return res.sendStatus(401)
        const passwordHashed = bcrypt.hashSync(req.body.password, user.salt)
        if (passwordHashed === user.password) {
            const token = generateToken({ _id:user._id, username: user.username, email: user.email})
            const payload = validateToken(token)
            req.user = payload
            res.cookie('token',token , { maxAge: 900000} )
            res.status(201).send(req.user)
        } else return res.sendStatus(401)
    }

    static async logOut(req, res) {
        res.clearCookie('token')
        res.sendStatus(204)
    }
}

module.exports = AuthController;
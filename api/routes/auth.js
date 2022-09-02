const express = require('express')
const router = express()
const { validateAuth } = require('../middlewares/auth')
const AuthController = require('../controllers/auth.controller')

router.get('/me', validateAuth, (req, res) => res.send(req.user))
router.post('/signup', AuthController.signUp)
router.post('/login', AuthController.logIn)
router.post('/logout', AuthController.logOut)

module.exports = router

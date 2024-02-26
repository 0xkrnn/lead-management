const router = require("express").Router()
const authModel = require("../model/userAuth")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const { handleLogin, handleRegister } = require("../controllers/authController")

router
    .post("/register", handleRegister)

    .post("/login", handleLogin)


module.exports = router;
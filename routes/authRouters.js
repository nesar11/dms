const router = require("express").Router();
// const User = require("../models/User");
// const CryptoJS = require("crypto-js");
// const jwt = require("jsonwebtoken");
const user = require("../controllers/authController")


// User register
router.post('/register', user.register)
router.post('/login', user.login)




module.exports = router
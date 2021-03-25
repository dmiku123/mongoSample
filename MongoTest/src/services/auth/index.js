const forgotPassword = require("./forgot");
const loginUser = require("./login") ;
const logoutUser = require("./logout");
const registerUser = require("./register")

module.exports={
    loginUser:loginUser,
    logoutUser:logoutUser,
    forgotPassword:forgotPassword,
    registerUser:registerUser
}
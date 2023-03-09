const jwt = require("jsonwebtoken")

// generaet jwt token
const generateToken = async(payload)=>{
    const token = await jwt.sign(payload,"hellojwt",{
        expiresIn:"1d"
    })
    return token;
}

module.exports ={
    generateToken
}
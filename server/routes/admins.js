const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Admin = require('../models/Admin')
const jwt = require('jsonwebtoken')
const verify = require('../auth/verify')



router.post('/login', async(req, res) => {
    
    const body = req.body
    //check body
    if(!body){
        return res.status(401).json({mes: 'Body not found !!!'})
    }

    
    //validate body
    const findAdmin = await Admin.findOne()
    .where('username')
    .equals(body.username) //compair

    if(!findAdmin) return res.status(401).json({mes: 'Wrong username or password !!!!'})

    const {error} = await bcrypt.compare(body.password, findAdmin.password)

    if(error) return res.status(401).json({mes: 'Wrong username or password !!!!'})

    const  token = jwt.sign({_id: findAdmin._id}, process.env.TOKEN_KEY)
    res.header('Authorization', token).status(200).json({token:token, mes: "Welcome"})
})


router.post('/verifyMyToken', verify, (req, res) => {
    res.status(200).json({mes: 'Token is real'})
})













module.exports = router
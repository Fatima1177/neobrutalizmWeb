const jwt = require('jsonwebtoken')


//admin merodlara sorgu atanda tokeni yoxlayib
module.exports = async function(req, res, next){
    const token =  await req.header('token')
    try{
        const openToken = jwt.verify(token, process.env.TOKEN_KEY)
        console.log(openToken)
        req.userInfo = openToken //(нужен если есть пару ака)
        next()
    } catch(err) {
        return res.status(401).json('Access Denied')
    }
}
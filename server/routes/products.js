const Product = require('../models/Product')
const router = require('express').Router()
const multerMiddleware = require('../hooks/multer')
const deleteFile = require('../hooks/deleteFile')
const mongoose = require('mongoose')
const verify = require('../auth/verify')

router.post('/add', verify, multerMiddleware("products"), async(req, res) => {
    const product = req.body
    console.log(product)
    if(!product){
        return res.status(400).json({mess: 'Empty Form'})
    }


    const newProduct = await new Product({
        img: req.file.path, //bura sekilin ozu yox adresi olur
        title: req.body.title,
        stockCount: req.body.stockCount,
        starPerFive: req.body.starPerFive,
        hasDiscount: req.body.hasDiscount,
        beforePrice: req.body.beforePrice,
        currentPrice: req.body.currentPrice
    })
    
    const saveProduct = newProduct.save()

        

    if(!saveProduct){
        return res.status(404).json({mess: 'Product not added'})
    }

    res.status(201).json({mess: 'Product added :)))'})
})


router.get('/', async (req, res) =>{
    const allProducts = await Product.find()
    res.status(200).json(allProducts)
})


router.delete('/:id', verify, async (req, res) =>{
    const productId = req.params.id

    if(!productId)
    return res.status(404).json({mes: 'Empty Id'})

    if (!mongoose.Types.ObjectId.isValid(productId))
    return res.status(400).json({ mes: 'Invalid ID format'})

    const deleteProduct = await Product.findByIdAndDelete(productId) 

    if(!deleteProduct){
        return res.status(400).json({mes:'Product is not deleted'})

    }
    res.status(200).json({mes: 'Product deleted successfully'})

})



module.exports = router
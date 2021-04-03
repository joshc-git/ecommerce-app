const express = require('express')
const productsRepo = require('../../repositories/products')
const productsTemplate = require('../../views/admin/products/index')

const router = express.Router()

router.get('/admin/products', (req, res) => {
    res.send(productsTemplate({ req }))
})

module.exports = router
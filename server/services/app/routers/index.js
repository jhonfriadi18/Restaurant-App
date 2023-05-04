const express = require('express')
const router = express.Router()

// const userRoute = require('./user')
const categoriesRoute = require('./categories')
const ingredientsRoute = require('./ingredients')
const itemsRouter = require('./item')
const customersRoute = require('./customers')
// const { authetication } = require('../middlewares/authetication')

// router.use('/',userRoute)
router.use('/pub',customersRoute)

// router.use(authetication)
router.use('/items',itemsRouter)
router.use('/categories',categoriesRoute)
router.use('/ingredients',ingredientsRoute)



module.exports = router
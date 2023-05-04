const express = require('express')
const Controller = require('../controllers/controllerItem')
const router = express.Router()

router.get('/', Controller.showAll)
router.post('/', Controller.addItem)
router.get('/:id', Controller.detailById)
router.put('/:id', Controller.updateAll)
router.delete('/:id', Controller.deleteItem)

module.exports = router

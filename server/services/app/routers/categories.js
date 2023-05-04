const express = require('express')
const Controller = require('../controllers/controllerCategory')
const router = express.Router()

router.get('/',Controller.showCategory)
router.post('/', Controller.createCategory)
router.get('/:id', Controller.detailCategory)
router.put('/:id', Controller.editCategory)
router.delete('/:id', Controller.deleteCategory)

module.exports = router
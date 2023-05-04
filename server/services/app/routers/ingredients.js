const express = require("express")
const Controller = require("../controllers/controllerIngredient")
const router = express.Router()

router.get('/:ItemId',Controller.showIngredient)

module.exports = router

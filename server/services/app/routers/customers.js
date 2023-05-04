const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controllerItem")

router.get("/", Controller.showAll);
router.get("/:id", Controller.detailById);

module.exports = router;
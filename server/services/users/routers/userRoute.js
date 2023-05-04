const express = require("express");
const router = express.Router();
const Controller = require("../controllers/contoller")

router.get("/", Controller.ShowUser)
router.post("/", Controller.createUser)
router.get("/:id", Controller.showUserById)
router.delete("/:id", Controller.deleteUser)

module.exports = router
const express = require("express");
const router = express.Router();

const users = require("./userRoute");
router.use("/users", users);

module.exports = router;
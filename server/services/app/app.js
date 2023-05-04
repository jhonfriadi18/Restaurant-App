
const express = require('express')
const router = require('./routers')
const app = express()
const port = process.env.PORT || 4002
const { errorHandler } = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(router)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
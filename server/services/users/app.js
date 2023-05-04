if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const { errorHandler } = require("./middlewares/errorHandler");
const { connect } = require("./configs/mongoConnections");

const router = require("./routers/index");
const Controller = require("./controllers/contoller");
const app = express();
const port = process.env.PORT ||4001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);


app.use(errorHandler);
connect().then(() => {
  app.listen(port, () => {
    console.log(`This server is running on port ${port}`);
  });
});

const { MongoClient } = require("mongodb");
const uri = process.env.URI;
const client = new MongoClient(uri);

let db = null;

const connect = async () => {
  try {
    const database = client.db("BurgerApps");
    db = database;

    return database
  } catch (err) {
    await client.close();
    console.log(err);
  }
};

const getDb = () => db;

module.exports = { connect, getDb };

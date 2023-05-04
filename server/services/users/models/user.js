const { ObjectId } = require("mongodb");
const { getDb } = require("../configs/mongoConnections");
const { hashPassword } = require("../helpers/bcrypt");


class User {
  static getCollection() {
    const db = getDb();
    // console.log('masuk model get connection')
    const collection = db.collection("users");
    // console.log(collection,'==========')
    return collection;
  }


  static async showAll(){
    const collect = this.getCollection()
    console.log(collect)
    // console.log('berhasi masuk di model')
    const users = await collect.find().toArray()
    console.log(users)
    return users
  }

  static showById(id){
    return this.getCollection().findOne({_id: new ObjectId(`${id}`)})
}

  static async createUser(input) {
    const collect = this.getCollection()
    const user = await collect.insertOne({
      ...input,
      password: hashPassword(input.password)
    })
    return ({ _id: user.insertedId, email: input.email })
  }

  static async deleteById(id) {
    const collect = this.getCollection()
    const user = await collect.deleteOne({ _id: ObjectId(id) })
    return user
  }
}

module.exports = User
const User = require("../models/user")

class Controller {
    static async ShowUser(req, res, next){

        try {
            console.log('berhasi masuk')
            const user = await User.showAll()
            console.log(user)
            res.status(200).json(user)
        } catch (error) {
            console.log(error);
            next(error)
        }
    }
    
    static async showUserById(req, res, next){
        try {
            const {id} = req.params
            console.log(id)
            const user = await User.showById(id)
            console.log(user)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }

    static async createUser(req, res, next){
        try {
            const {email, password, username, phoneNumber, address, role} = req.body
            if (
                !username ||
                !email ||
                !password ||
                !role ||
                !phoneNumber ||
                !address
              ) {
                throw { name: "BadRequest" };
              }
            const user = await User.createUser({email, password, username, phoneNumber, address, role})
            res.status(201).json(user)
        } catch (error) {
            next(error)
        }
    }

    static async deleteUser(req, res, next){
        try {
            const {id} = req.params
            const user = await User.deleteById(id)
            res.status(200).json({ message: "User has been deleted" })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller
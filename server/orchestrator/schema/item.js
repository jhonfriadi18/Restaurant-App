const axios = require("axios")
const redis = require("../config/connection")
const serverApp = "http://localhost:4002"

const typeDefs = `#graphql
type Items {
    id: Int,
    name: String,
    imgUrl: String,
}
type Item {
    id: Int,
    name: String,
    description: String,
    price: String,
    imgUrl: String,
    Ingredients: [Ingredients],
    User : user
    Category: Category
}
type Category {
    name : String
}
type Ingredients {
    name : String
}
type Query {
    items: [Items]
    item(id : ID) : Item
}
type createItem {
    id: Int,
    name: String,
    price: Int,
    description: String
    imgUrl : String
    authorId : String
    categoryId : Int
}
type editedItem {
    message: String
}
type deleteItem {
    message: String
}
input newIngredients {
    name : String
}
type user {
    email : String
    username : String
}
input newItem {
    name : String
    description : String
    price : Int
    imgUrl : String
    authorId : String
    categoryId : Int
    ingredients : [newIngredients]
}
input editItem {
    name : String
    description : String
    price : Int
    imgUrl : String
    authorId : String
    categoryId : Int
    ingredients : [newIngredients]
}
type Mutation {
    addItem(inputValue: newItem): createItem
    editItemById(id: ID, inputValue: editItem): editedItem
    deleteItem(id: ID): deleteItem
}
`

const resolvers = {
    Query : {
        items: async ()=> {
            try {
                const cacheItems = await redis.get("items")
                if (cacheItems){
                    const items = JSON.parse(cacheItems)
                    return items
                }

                const { data } = await axios({
                    method : "get",
                    url : `${serverApp}/items`
                })
                await redis.set("items", JSON.stringify(data))
                return data
            } catch (error) {
                throw error.response.data
            }
        },
        item: async (_, args) =>{
            try {
                const {id} = args
                console.log(id)
                const cacheItem = await redis.get("item")
         
                const {data} = await axios({
                    method : "get",
                    url : `${serverApp}/items/${id}`
                })
                console.log(data,'======>')
                const {data : dataUser} = await axios({
                    method: "get",
                    url : `http://localhost:4001/users/${data.authorMongoId}`
                })
                console.log(data)
                data.User = dataUser
                await redis.set("item", JSON.stringify(data))
                return data
            } catch (error) {
                console.log(error)
                throw error.response.data
            }
        }
    },
    Mutation : {
        addItem: async (_, args) => {
            try {
                const {name, description, price, imgUrl, authorId, categoryId, ingredients} = args.inputValue

                const {data} = await axios ({
                    method : 'post',
                    url : `${serverApp}/items`,
                    data : {name, description, price, imgUrl, authorId, categoryId, ingredients}
                })
                await redis.del("items", JSON.stringify(data))
                return data
            } catch (error) {
                throw error.response.data
            }
        },
        editItemById : async (_, args) => {
            try {
                const {id} = args
                const {name, description, price, imgUrl, authorId, categoryId } = args.inputValue
                console.log(args.inputValue);

                const {data} = await axios({
                    method : "put",
                    url : `${serverApp}/items/${id}`,
                    data : {name, description, price, imgUrl, authorId, categoryId}
                })
                await redis.del("items")
                return data
            } catch (error) {
                throw error.response.data
            }
        },
        deleteItem: async (_, args) => {
            try {
                const {id} = args
                const {data} = await axios({
                    method : "delete",
                    url : `${serverApp}/items/${id}`,
                })
                await redis.del("items")
                return data
            } catch (error) {
                throw error.response.data
            }
        }
    }
}

module.exports = {typeDefs, resolvers}
const { Item, Ingredient, Category, sequelize, } = require("../models/index");

class Controller {
  static async showAll(req, res, next) {
    
    try {
      console.log('masuk')
      let data = await Item.findAll({
        include: [
          {
            model: Ingredient,
            attributes: ["name"],
          },
          {
            model: Category,
            attributes: ["name"],
          },
          
        ],
      });
      console.log(data)
      res.status(200).json(data);
    } catch (error) {
      console.log(error)
      next(error);
    }
  }

  static async addItem(req, res, next) {
    try {
      let { name, description, price, imgUrl, categoryId, ingredients } =
        req.body;
     

      let result = await sequelize.transaction(async (t) => {
        let data = await Item.create(
          {
            name,
            description,
            price,
            imgUrl,
            auth,
            authorMongoId,
          },
          { transaction: t }
        );
        ingredients.map((item)=>{
            item.ItemId = data.id
            return item
        })
        await Ingredient.bulkCreate(ingredients, {transaction: t})
        return data
      });
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }

  static async detailById(req, res, next) {
    try {
      let { id } = req.params;
      console.log(id,'id apps')
      let menu = await Item.findByPk(id, {
        include: [
            {
              model: Ingredient,
              attributes: ["name"],
            },
            {
              model: Category,
              attributes: ["name"],
            },
          ],
      });
      console.log(menu)
      if (!menu) {
        throw { name: "NotFound" };
      }
      res.status(200).json(menu)
    } catch (error) {
      next(error);
    }
  }

  static async updateAll(req, res, next) {
    try {
      let { id } = req.params;
      console.log(id)
      let { name, description, price, imgUrl, authorMongoId, categoryId } = req.body;
      let find = await Item.findByPk(id)
      if (!find){
        throw ({name : "NotFound"})
      }
      let data = await Item.update(
        {
          name,
          description,
          price,
          imgUrl,
          authorMongoId,
          categoryId,
        },
        { where: { id: id } }
      );
      res.status(200).json(data);
    } catch (error) {
      console.log(error)
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      let { id } = req.params;
      let databyId = await Item.findByPk(id);
      let data = await Item.destroy({
        where: { id },
      });
      res.status(200).json({ message: databyId.name + " success to delete" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

const { Category } = require('../models/')

class Controller {
    static async showCategory(req, res, next) {
        try {
            let data = await Category.findAll();
            res.status(200).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async createCategory(req, res, next) {
        try {
            let { name } = req.body;
            let data = await Category.create({ name });
            res.status(201).json(data);
        } catch (error) {
            next(error);
        }
    }

    static async detailCategory(req, res, next) {
        try {
            let { id } = req.params
            let data = await Category.findByPk(id)
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async editCategory(req, res, next) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            const foundCategory = await Category.findByPk(id);
            if (!foundCategory) {
                throw { name: "NotFound" };
            }

            await Category.update({ name }, { where: { id } });
            res
                .status(200)
                .json({ message: `${foundCategory.name} has been updated` });
        } catch (err) {
            next(err);
        }
    }

    static async deleteCategory(req, res, next) {
        try {
          let { id } = req.params;
          let databyId = await Category.findByPk(id);
          let data = await Category.destroy({
            where: { id },
          });
          res.status(200).json({ message: databyId.name + " success to delete" });
        } catch (error) {
          next(error);
        }
      }
    

}

module.exports = Controller
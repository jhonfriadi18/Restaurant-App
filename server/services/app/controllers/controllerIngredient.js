const { Ingredient } = require("../models/index");

class Controller {
    static async showIngredient(req, res, next) {
        try {
            const { ItemId } = req.params;

            const ingredients = await Ingredient.findAll({ where: { ItemId }, include: ['Item'] });
            res.status(200).json(ingredients);
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Controller
const db = require("../data/config");

function getRecipes() {
  return db("recipes");
}
function getRecipesById(id) {
  return db("recipes").where("id", id);
}

function getShoppingList(id) {
  return db("recipe_ingredients as ri")
    .innerJoin("recipes as r", "r.id", "ri.recipe_id")
    .innerJoin("ingredients as i", "i.id", "ri.ingredient_id")
    .where("r.id", id)
    .select("*");
}
function getInstructions(id){
    return db("instructions as i")
    .innerJoin("recipes as r", "r.id", "i.recipe_id")
    .where("i.recipe_id", id)
    .select("*")
    .orderBy("i.step_number")
}

module.exports = {
  getRecipes,
  getRecipesById,
  getShoppingList,
  getInstructions
};

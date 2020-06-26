exports.seed = async function (knex) {
  await knex("recipe_ingredients").insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      ammount: "2 whole",
    },
    {
      recipe_id: 2,
      ingredient_id: 1,
      ammount: "2 cups",
    },
    {
      recipe_id: 2,
      ingredient_id: 3,
      ammount: "2 cups",
    },
    {
      recipe_id: 2,
      ingredient_id: 4,
      ammount: "to taste",
    },
    {
      recipe_id: 2,
      ingredient_id: 5,
      ammount: "to taste",
    },
    {
      recipe_id: 2,
      ingredient_id: 6,
      ammount: "1.5 cups",
    },
    {
      recipe_id: 2,
      ingredient_id: 7,
      ammount: "2 tbsp",
    },
    {
      recipe_id: 2,
      ingredient_id: 8,
      ammount: "1 tbsp",
    },
  ]);
};

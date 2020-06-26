exports.seed = async function (knex) {
  await knex("instructions").insert([
    { recipe_id: 1, step_number: 1, instructions: "brake eggs into bowl" },
    { recipe_id: 1, step_number: 2, instructions: "beat well" },
    {
      recipe_id: 1,
      step_number: 3,
      instructions: "cook over medium heat till firm",
    },
    { recipe_id: 2, step_number: 1, instructions: "get noodles cooking" },
    {
      recipe_id: 2,
      step_number: 2,
      instructions: "melt butter then add flour and mix",
    },
    {
      recipe_id: 2,
      step_number: 3,
      instructions: "add milk and heat till bubbles",
    },
    {
      recipe_id: 2,
      step_number: 4,
      instructions:
        "add cheese and stir till melted, then add salt and pepper to taste",
    },
    {
      recipe_id: 2,
      step_number: 5,
      instructions: "mix sauce and noodles and bake at 350 for 25-30 minutes",
    },
  ]);
};

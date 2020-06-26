exports.seed = async function (knex) {
  await knex("recipes").insert([
    { name: "scrambles eggs" },
    { name: "mac and cheese" },
  ]);
};

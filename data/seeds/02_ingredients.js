exports.seed = async function (knex) {
  await knex("ingredients").insert([
    { name: "elbow macaroni" },
    { name: "eggs" },
    { name: "milk" },
    { name: "salt" },
    { name: "pepper" },
    { name: "cheese" },
    { name: "butter" },
    { name: "flour" },
  ]);
};

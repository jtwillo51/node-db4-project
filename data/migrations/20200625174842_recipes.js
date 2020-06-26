exports.up = async function (knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id");
    table.text("name").notNull();
  });

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id");
    table.text("name").notNull().unique();
  });

  await knex.schema.createTable("instructions", (table) => {
    table.increments("id");
    table.integer("recipe_id").references("id").inTable("recipes");
    table.text("instructions").notNull();
    table.integer("step_number").notNull();
  });

  await knex.schema.createTable("recipe_ingredients", (table) => {
    table.integer("recipe_id").references("id").inTable("recipes");
    table.integer("ingredient_id").references("id").inTable("ingredients");
    table.float("ammount").notNull();
    table.primary(["recipe_id", "ingredient_id"]);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("recipe_ingredients");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("ingredients");
  await knex.schema.dropTableIfExists("recipes");
};

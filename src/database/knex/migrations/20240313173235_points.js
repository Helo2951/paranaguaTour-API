exports.up = (knex) => {
    return knex.schema.createTable('points', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('summary').notNullable();
        table.text('description').notNullable();
        table.string('location').notNullable();
        table.float('mediaRating').notNullable();
        table.string('category').notNullable();
    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('points');
}
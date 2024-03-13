exports.up = (knex) => {
    return knex.schema.createTable('comments', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users').onDelete('CASCADE');
        table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE');
        table.timestamps('created_at').defaultTo(knex.fn.now());
        table.timestamps('updated_at').defaultTo(knex.fn.now());
        table.string('title').notNullable();
        table.text('comment');
        table.integer('rating').notNullable();
    });
}

exports.down = (knex) => {
    return knex.schema.dropTableIfExists('comments');
}
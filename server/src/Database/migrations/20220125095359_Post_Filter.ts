import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Post_Filter', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('technologyId').notNullable();
    table.integer('postId').notNullable();
    table.foreign('technologyId').references('id').inTable('Technology');
    table
      .foreign('postId')
      .references('id')
      .inTable('Post')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Post_Filter');
}

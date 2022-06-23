import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Post_Confirm', (table) => {
    table.increments('id').primary().notNullable();
    table.timestamp('date').notNullable();
    table.boolean('seen').defaultTo(false);
    table.integer('postId').notNullable();
    table.integer('userId').notNullable();
    table
      .foreign('postId')
      .references('id')
      .inTable('Post')
      .onDelete('CASCADE');
    table
      .foreign('userId')
      .references('id')
      .inTable('User')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Post_Confirm');
}

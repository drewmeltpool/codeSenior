import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('User_Token', (table) => {
    table.increments('id').primary().notNullable();
    table.text('refreshToken');
    table.integer('userId').notNullable();
    table
      .foreign('userId')
      .references('id')
      .inTable('User')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('User_Token');
}

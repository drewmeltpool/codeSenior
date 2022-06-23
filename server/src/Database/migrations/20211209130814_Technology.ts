import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Technology', (table) => {
    table.increments('id').primary().notNullable();
    table.string('name').notNullable();
    table.string('icon').notNullable();
    table.integer('languageId').notNullable();
    table
      .foreign('languageId')
      .references('id')
      .inTable('Language')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Technology');
}

import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Developer_Language', (table) => {
    table.increments('id').primary().notNullable();
    table.string('language').notNullable();
    table.integer('developerId').notNullable();
    table
      .foreign('developerId')
      .references('id')
      .inTable('Developer')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Developer_Language');
}

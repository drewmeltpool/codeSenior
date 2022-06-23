import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Developer_Experience', (table) => {
    table.increments('id').primary().notNullable();
    table.timestamp('start').notNullable();
    table.timestamp('end').notNullable();
    table.string('title').notNullable();
    table.text('position').notNullable();
    table.text('description').notNullable();
    table.integer('developerId').notNullable();
    table
      .foreign('developerId')
      .references('id')
      .inTable('Developer')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Developer_Experience');
}

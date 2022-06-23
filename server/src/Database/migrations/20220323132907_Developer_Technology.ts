import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Developer_Technology', (table) => {
    table.increments('id').primary().notNullable();
    table.integer('year').notNullable();
    table.integer('technologyId').notNullable();
    table.integer('developerId').notNullable();
    table
      .foreign('developerId')
      .references('id')
      .inTable('Developer')
      .onDelete('CASCADE');
    table
      .foreign('technologyId')
      .references('id')
      .inTable('Technology')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Developer_Technology');
}

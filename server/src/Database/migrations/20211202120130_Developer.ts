import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Developer', (table) => {
    table.increments('id').primary().notNullable();
    table.string('english').defaultTo('');
    table.integer('salary').defaultTo(0);
    table.integer('userId').notNullable();
    table
      .foreign('userId')
      .references('id')
      .inTable('User')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Developer');
}

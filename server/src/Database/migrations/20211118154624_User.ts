import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

  return knex.schema.createTable('User', (table) => {
    table.increments('id').primary().notNullable();
    table.string('email').notNullable();
    table.text('password').notNullable();
    table.text('image').defaultTo('');
    table.string('firstName').defaultTo('');
    table.string('lastName').defaultTo('');
    table.string('title').defaultTo('');
    table.string('city').defaultTo('');
    table.text('shortDescription').defaultTo('');
    table.boolean('hidden').defaultTo(false);
    table.text('activationLink');
    table.boolean('isActivated').defaultTo(false);
    table.integer('userTableNameId').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('User');
}

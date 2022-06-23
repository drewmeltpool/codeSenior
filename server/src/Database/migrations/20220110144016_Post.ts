import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Post', (table) => {
    table.increments('id').primary().notNullable();
    table.string('title').notNullable();
    table.string('position').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();
    table.text('description').notNullable();
    table.text('bonuses').defaultTo('');
    table.text('requirement').defaultTo('');
    table.text('additional').defaultTo('');
    table.timestamp('postDate').notNullable();
    table.integer('authorId');
    table
      .foreign('authorId')
      .references('id')
      .inTable('Recruiter')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Post');
}

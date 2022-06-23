import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('Recruiter', (table) => {
    table.increments('id').primary().notNullable();
    table.text('companyImage').defaultTo('');
    table.string('companyName').defaultTo('');
    table.string('aboutCompany').defaultTo('');
    table.string('companyWebsite').defaultTo('');
    table.integer('userId').notNullable();
    table
      .foreign('userId')
      .references('id')
      .inTable('User')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('Recruiter');
}

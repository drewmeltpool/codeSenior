import knex, { Knex } from 'knex';
import knexFile from './knexfile';
import fp from 'fastify-plugin';
import { attachPaginate } from 'knex-paginate';

import { FastifyPluginCallback } from 'fastify';

const db: Knex = knex(knexFile.development);

attachPaginate();

const knexConnector: FastifyPluginCallback = async (server, _, next) => {
  server.decorate('db', db);

  next();
};

export { db };

export default fp(knexConnector);

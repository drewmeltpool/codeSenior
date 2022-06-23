import { Knex } from 'knex';
import dotenv from 'dotenv';

interface IKnexConfig {
  [key: string]: Knex.Config;
}

dotenv.config({ path: __dirname + '/../../.env' });

const config: IKnexConfig = {
  development: {
    useNullAsDefault: true,
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    },
    pool: {
      min: Number(process.env.MIN_POOL),
      max: Number(process.env.MAX_POOL),
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  staging: {
    useNullAsDefault: true,
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    },
    pool: {
      min: Number(process.env.MIN_POOL),
      max: Number(process.env.MAX_POOL),
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    useNullAsDefault: true,
    client: process.env.DB_CLIENT,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    },
    pool: {
      min: Number(process.env.MIN_POOL),
      max: Number(process.env.MAX_POOL),
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};

export default config;

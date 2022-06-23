import dotenv from 'dotenv';
import fastify from 'fastify';
import clusterApp from './cluster';
import routes from './routers';
import cors from 'fastify-cors';
import db from './Database';

dotenv.config();

clusterApp(async () => {
  const PORT = process.env.PORT || 3000;

  const app = fastify({ logger: true });

  app.setErrorHandler(async (error, req, reply) => {
    console.log(error);
    reply.status(400);
    reply.send(error);
  });

  app.register(db);
  app.register(cors, {
    credentials: true,
    origin: '*',
    // origin: process.env.CLIENT_URL,
  });

  app.register(routes);

  app.listen(PORT, (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }

    console.info(`server listening on ${address}`);

    process.on('SIGINT', () => app.close());
    process.on('SIGTERM', () => app.close());
  });

  console.info(process.pid + ' - WORKER STARTED');
});

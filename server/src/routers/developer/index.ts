import { FastifyPluginCallback } from 'fastify';
import { developerController } from '../../Controllers';

const developerRouter: FastifyPluginCallback = (app, _, next) => {
  app.get('/', {}, developerController.retrieve);
  app.get('/:id', {}, developerController.findById);
  app.post('/:id', {}, developerController.update);
  app.delete('/:id', {}, developerController.deleteById);

  next();
};

export default developerRouter;

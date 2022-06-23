import { FastifyPluginCallback } from 'fastify';
import { technologyController } from '../../Controllers';

const techRouter: FastifyPluginCallback = (app, _, next) => {
  app.post('/', {}, technologyController.create);
  app.get('/', {}, technologyController.retrieve);
  app.get('/:id', {}, technologyController.findById);
  app.put('/:id', {}, technologyController.update);
  app.delete('/:id', {}, technologyController.deleteById);

  next();
};

export default techRouter;

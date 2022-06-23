import { FastifyPluginCallback } from 'fastify';
import { recruiterController } from '../../Controllers';

const recruiterRouter: FastifyPluginCallback = (app, _, next) => {
  app.post('/', {}, recruiterController.create);
  app.get('/', {}, recruiterController.retrieve);
  app.get('/:id', {}, recruiterController.findById);
  app.put('/:id', {}, recruiterController.update);
  app.delete('/:id', {}, recruiterController.deleteById);

  next();
};

export default recruiterRouter;

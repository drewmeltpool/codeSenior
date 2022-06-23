import { FastifyPluginCallback } from 'fastify';
import { languageController } from '../../Controllers';

const languageRouter: FastifyPluginCallback = (app, _, next) => {
  app.post('/', {}, languageController.create);
  app.get('/', {}, languageController.retrieve);
  app.get('/:id', languageController.findById);
  app.put('/:id', {}, languageController.update);
  app.delete('/:id', {}, languageController.deleteById);

  next();
};

export default languageRouter;

import { FastifyPluginCallback } from 'fastify';
import { developerTechnology } from '../../Controllers';

const developerTechnologyRoute: FastifyPluginCallback = (app, _, next) => {
  app.get('/:developerId', {}, developerTechnology.findById);
  app.post('/:developerId', {}, developerTechnology.create);
  app.delete('/:developerId/:id', {}, developerTechnology.delete);
  app.put('/:developerId/:id', {}, developerTechnology.update);

  next();
};

export default developerTechnologyRoute;

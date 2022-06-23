import { FastifyPluginCallback } from 'fastify';
import { developerEducation } from '../../Controllers';

const developerEducationRoute: FastifyPluginCallback = (app, _, next) => {
  app.get('/:developerId', {}, developerEducation.findById);
  app.post('/:developerId', {}, developerEducation.create);
  app.delete('/:developerId/:id', {}, developerEducation.delete);
  app.put('/:developerId/:id', {}, developerEducation.update);

  next();
};

export default developerEducationRoute;

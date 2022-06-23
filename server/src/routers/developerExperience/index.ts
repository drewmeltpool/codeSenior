import { FastifyPluginCallback } from 'fastify';
import { developerExperience } from '../../Controllers';

const developerExperienceRoute: FastifyPluginCallback = (app, _, next) => {
  app.get('/:developerId', {}, developerExperience.findById);
  app.post('/:developerId', {}, developerExperience.create);
  app.delete('/:developerId/:id', {}, developerExperience.delete);
  app.put('/:developerId/:id', {}, developerExperience.update);

  next();
};

export default developerExperienceRoute;

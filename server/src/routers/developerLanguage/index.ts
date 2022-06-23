import { FastifyPluginCallback } from 'fastify';
import { developerLanguage } from '../../Controllers';

const developerLanguageRoute: FastifyPluginCallback = (app, _, next) => {
  app.get('/:developerId', {}, developerLanguage.findById);
  app.post('/:developerId', {}, developerLanguage.create);
  app.delete('/:developerId/:id', {}, developerLanguage.delete);
  app.put('/:developerId/:id', {}, developerLanguage.update);

  next();
};

export default developerLanguageRoute;

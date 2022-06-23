import { FastifyPluginCallback } from 'fastify';

import userRoute from './user';
import postRoute from './post';
import languageRoute from './language';
import technologyRoute from './technology';
import developerEducationRoute from './developerEducation';
import developerTechnologyRoute from './developerTechnology';
import developerLanguageRoute from './developerLanguage';
import developerExperienceRoute from './developerExperience';
import recruiterRoute from './recruiter';
import postConfirmRoute from './postConfirm';
import developerRouter from './developer';

const routes: FastifyPluginCallback = async (app, _, next) => {
  app.register(userRoute, { prefix: 'user' });
  app.register(languageRoute, { prefix: 'language' });
  app.register(technologyRoute, { prefix: 'technology' });
  app.register(postRoute, { prefix: 'post' });
  app.register(developerEducationRoute, { prefix: 'developer-education' });
  app.register(developerExperienceRoute, { prefix: 'developer-experience' });
  app.register(developerLanguageRoute, { prefix: 'developer-language' });
  app.register(developerTechnologyRoute, { prefix: 'developer-technology' });
  app.register(recruiterRoute, { prefix: 'recruiter' });
  app.register(developerRouter, { prefix: 'developers' });
  app.register(postConfirmRoute, { prefix: 'post-confirm' });

  next();
};

export default routes;

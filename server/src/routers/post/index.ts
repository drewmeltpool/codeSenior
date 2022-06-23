import { FastifyPluginCallback } from 'fastify';
import { postController } from '../../Controllers';

const postRouter: FastifyPluginCallback = (app, _, next) => {
  app.get('/recruiter/:recruiterId', {}, postController.findByRecruiterId);
  app.get('/:id', {}, postController.findById);
  app.get('/', {}, postController.retrieve);
  app.post('/', {}, postController.create);
  app.put('/:id', {}, postController.update);
  app.delete('/:id', {}, postController.delete);

  next();
};

export default postRouter;

import { FastifyPluginCallback } from 'fastify';
import { postConfirmController } from '../../Controllers';

const postRouter: FastifyPluginCallback = (app, _, next) => {
  app.post('/', {}, postConfirmController.create);
  app.delete('/:userId/:postId', {}, postConfirmController.delete);
  app.get('/user/:userId', {}, postConfirmController.findUserPost);
  app.get('/:authorId', {}, postConfirmController.findRecruiterPost);
  app.get('/:userId/:postId', {}, postConfirmController.isApplied);
  app.get('/candidates/:postId', postConfirmController.postCandidates);
  next();
};

export default postRouter;

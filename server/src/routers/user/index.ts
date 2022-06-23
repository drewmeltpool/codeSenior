import { FastifyPluginCallback } from 'fastify';
import { userController } from '../../Controllers';
// import privateRouter from '../../helpers/privateRoute';

const userRouter: FastifyPluginCallback = (app, _, next) => {
  app.get('/', userController.retrieve);
  app.delete('/:id', userController.delete);
  app.get('/:id', userController.findById);
  app.put('/:id', userController.update);

  app.put('/refreshPassword', userController.refreshPassword);
  app.post('/register', userController.register);
  app.post('/login', userController.login);
  app.post('/logout', userController.logout);

  app.get('/activation/:link', userController.activate);
  app.get('/refresh', userController.refresh);

  next();
};

export default userRouter;

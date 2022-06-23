import { FastifyReply, FastifyRequest } from 'fastify';
import { tokenService } from '../../services';

const privateRouter =
  (cb: (_req: FastifyRequest, _reply: FastifyReply) => Promise<unknown>) =>
  (req: FastifyRequest, reply: FastifyReply) => {
    const { authorization = '' } = req.headers;

    const [, token] = authorization.split(' ');

    try {
      tokenService.validateAccessToken(token);
      return cb(req, reply);
    } catch (e) {
      reply.code(401).send({
        code: 401,
        message: 'Authorization invalid',
      });
    }
  };

export default privateRouter;

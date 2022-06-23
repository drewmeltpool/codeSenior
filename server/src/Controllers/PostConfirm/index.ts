import { IKey } from '../../types';
import { postConfirmService } from '../../Services';
import { FastifyRequest } from 'fastify';

class PostConfirmController {
  public async delete(
    req: FastifyRequest<{
      Params: {
        postId: number;
        userId: number;
      };
    }>
  ) {
    const { postId, userId } = req.params;
    const post = postConfirmService.delete(postId, userId);

    return post;
  }

  public async isApplied(
    req: FastifyRequest<{
      Params: {
        postId: number;
        userId: number;
      };
    }>
  ) {
    const { postId, userId } = req.params;
    const post = postConfirmService.isApplied(postId, userId);

    return post;
  }

  public async create(
    req: FastifyRequest<{
      Body: {
        postId: number;
        userId: number;
        date: string;
      };
    }>
  ) {
    const { postId, userId, date } = req.body;

    const post = postConfirmService.create(postId, userId, date);

    return post;
  }

  public async findRecruiterPost(
    req: FastifyRequest<{ Params: { authorId: IKey } }>
  ) {
    const { authorId } = req.params;
    const posts = postConfirmService.findRecruiterPost(authorId);

    return posts;
  }

  public async findUserPost(req: FastifyRequest<{ Params: { userId: IKey } }>) {
    const { userId } = req.params;
    const posts = postConfirmService.findUserPost(userId);

    return posts;
  }

  public async postCandidates(
    req: FastifyRequest<{ Params: { postId: IKey } }>
  ) {
    const { postId } = req.params;
    const posts = postConfirmService.postCandidates(postId);

    return posts;
  }
}

export default new PostConfirmController();

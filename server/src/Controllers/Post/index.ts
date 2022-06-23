import { FastifyRequest } from 'fastify';
import { IKey, IPost } from '../../types';
import { postService } from '../../Services';
import jwtDecode from 'jwt-decode';

class PostController {
  public async retrieve(
    req: FastifyRequest<{
      Querystring: {
        page: number;
      };
    }>
  ) {
    const { authorization } = req.headers;
    const { page = 1 } = req.query;

    const { id } = jwtDecode(authorization || '') as any;

    return postService.retrieve(page, id);
  }

  public async create(
    req: FastifyRequest<{
      Body: IPost;
    }>
  ) {
    const {
      title,
      position,
      from,
      to,
      requirement,
      description,
      bonuses,
      additional,
      authorId,
      postDate,
    } = req.body;
    const post = postService.create({
      title,
      position,
      from,
      to,
      requirement,
      description,
      bonuses,
      additional,
      authorId,
      postDate,
    });

    return post;
  }

  public async update(
    req: FastifyRequest<{
      Body: IPost;
      Params: { id: IKey };
    }>
  ) {
    const { id } = req.params;

    return postService.update(id, req.body);
  }

  public async findById(
    req: FastifyRequest<{
      Params: { id: string };
    }>
  ) {
    const { id } = req.params;

    return postService.findById(id);
  }

  public async delete(
    req: FastifyRequest<{
      Params: { id: string };
    }>
  ) {
    const { id } = req.params;

    return postService.delete(id);
  }

  public async findByRecruiterId(
    req: FastifyRequest<{
      Params: { recruiterId: string };
    }>
  ) {
    const { recruiterId } = req.params;

    return postService.findByRecruiterId(recruiterId);
  }
}

export default new PostController();

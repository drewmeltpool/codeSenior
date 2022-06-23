import { FastifyReply, FastifyRequest } from 'fastify';
import { EUserTableNames } from '../../constants';
import { IKey } from '../../types';
import { userService } from '../../Services';

class UserController {
  public async retrieve() {
    const user = await userService.retrieve();

    return user;
  }

  public async findById(request: FastifyRequest<{ Params: { id: IKey } }>) {
    const { id } = request.params;

    const user = await userService.findById(id);

    return user;
  }

  public async register(
    request: FastifyRequest<{
      Body: {
        email: string;
        password: string;
        userTableNameId: EUserTableNames;
      };
    }>
  ) {
    const { email, password, userTableNameId } = request.body;
    const user = await userService.register(email, password, userTableNameId);

    return user;
  }

  public async activate(
    request: FastifyRequest<{
      Params: {
        link: string;
      };
    }>,
    reply: FastifyReply
  ) {
    const { link } = request.params;
    await userService.activate(link);

    reply.redirect(303, process.env.CLIENT_URL);
  }

  public async login(
    request: FastifyRequest<{
      Body: {
        email: string;
        password: string;
      };
    }>
  ) {
    const { email, password } = request.body;
    const user = await userService.login(email, password);

    return user;
  }

  public async logout(
    request: FastifyRequest<{
      Body: {
        refreshToken: string;
      };
    }>
  ) {
    const { refreshToken } = request.body;
    const token = await userService.logout(refreshToken);

    return token;
  }

  public async refresh(
    request: FastifyRequest<{
      Body: {
        refreshToken: string;
      };
    }>
  ) {
    const { refreshToken } = request.body;
    const user = await userService.refresh(refreshToken);

    return user;
  }

  public async delete(
    request: FastifyRequest<{
      Params: {
        id: IKey;
      };
    }>
  ) {
    const { id } = request.params;
    const user = await userService.delete(id);

    return user;
  }

  public async refreshPassword(
    request: FastifyRequest<{
      Body: {
        id: IKey;
        password: string;
      };
    }>
  ) {
    const { id, password } = request.body;
    const user = await userService.refreshPassword(id, password);

    return user;
  }

  public async update(
    request: FastifyRequest<{
      Body: {
        firstName?: string;
        lastName?: string;
        hidden?: boolean;
        title?: string;
        shortDescription?: string;
        image?: string;
        city?: string;
      };
      Params: { id: IKey };
    }>
  ) {
    const {
      firstName,
      lastName,
      hidden,
      title,
      shortDescription,
      image,
      city,
    } = request.body;
    const { id } = request.params;

    const user = await userService.update(id, {
      firstName,
      lastName,
      hidden,
      title,
      shortDescription,
      image,
      city,
    });

    return user;
  }
}

export default new UserController();

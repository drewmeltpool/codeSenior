import { IKey } from '../../types';
import { developerEducation } from '../../Services';
import { FastifyRequest } from 'fastify';

class DeveloperEducationController {
  public async findById(
    req: FastifyRequest<{ Params: { developerId: IKey } }>
  ) {
    const { developerId } = req.params;
    const devEducation = await developerEducation.findById(developerId);

    return devEducation;
  }

  public async create(
    req: FastifyRequest<{
      Body: {
        title: string;
        description: string;
        position: string;
        start: string;
        end: string;
      };
      Params: { developerId: IKey };
    }>
  ) {
    const { description, title, position, start, end } = req.body;
    const { developerId } = req.params;

    const devEducation = await developerEducation.create({
      description,
      title,
      position,
      start,
      end,
      developerId,
    });

    return devEducation;
  }

  public async delete(
    req: FastifyRequest<{
      Params: {
        developerId: IKey;
        id: IKey;
      };
    }>
  ) {
    const { developerId, id } = req.params;
    const devEducation = await developerEducation.delete(developerId, id);

    return devEducation;
  }

  public async update(
    req: FastifyRequest<{
      Params: {
        developerId: IKey;
        id: string;
      };
      Body: {
        title: string;
        description: string;
        start: string;
        end: string;
        position: string;
      };
    }>
  ) {
    const { developerId, id } = req.params;
    const { title, description, start, end, position } = req.body;
    const devEducation = await developerEducation.update(developerId, id, {
      title,
      description,
      start,
      end,
      position,
    });

    return devEducation;
  }
}

export default new DeveloperEducationController();

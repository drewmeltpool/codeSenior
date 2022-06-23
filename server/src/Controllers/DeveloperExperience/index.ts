import { IKey } from '../../types';
import { developerExperience } from '../../Services';
import { FastifyRequest } from 'fastify';

class DeveloperExperienceController {
  public async findById(
    req: FastifyRequest<{ Params: { developerId: IKey } }>
  ) {
    const { developerId } = req.params;
    const devExperience = await developerExperience.findById(developerId);

    return devExperience;
  }

  public async create(
    req: FastifyRequest<{
      Body: {
        title: string;
        position: string;
        description: string;
        start: string;
        end: string;
      };
      Params: { developerId: IKey };
    }>
  ) {
    const { title, position, description, start, end } = req.body;
    const { developerId } = req.params;

    const devExperience = await developerExperience.create({
      title,
      position,
      description,
      start,
      end,
      developerId,
    });

    return devExperience;
  }

  public async delete(
    req: FastifyRequest<{
      Params: {
        developerId: IKey;
        id: string;
      };
    }>
  ) {
    const { developerId, id } = req.params;
    const devExperience = await developerExperience.delete(developerId, id);

    return devExperience;
  }

  public async update(
    req: FastifyRequest<{
      Params: {
        developerId: IKey;
        id: string;
      };
      Body: {
        title: string;
        position: string;
        description: string;
        start: string;
        end: string;
      };
    }>
  ) {
    const { developerId, id } = req.params;
    const { title, description, start, end, position } = req.body;
    const devExperience = await developerExperience.update(developerId, id, {
      title,
      position,
      description,
      start,
      end,
    });

    return devExperience;
  }
}

export default new DeveloperExperienceController();

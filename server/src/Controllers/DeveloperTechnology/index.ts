import { IKey } from '../../types';
import { developerTechnology } from '../../Services';
import { FastifyRequest } from 'fastify';

class DeveloperTechnologyController {
  public async findById(
    req: FastifyRequest<{ Params: { developerId: IKey } }>
  ) {
    const { developerId } = req.params;
    const devTechnology = await developerTechnology.findById(developerId);

    return devTechnology;
  }

  public async create(
    req: FastifyRequest<{
      Body: {
        year: string;
        technologyId: IKey;
      };
      Params: {
        developerId: IKey;
      };
    }>
  ) {
    const { technologyId, year } = req.body;
    const { developerId } = req.params;

    const devTechnology = await developerTechnology.create({
      developerId,
      technologyId,
      year,
    });

    return devTechnology;
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

    const devTechnology = await developerTechnology.delete(developerId, id);

    return devTechnology;
  }

  public async update(
    req: FastifyRequest<{
      Body: {
        year: string;
        technologyId: IKey;
      };
      Params: {
        developerId: IKey;
        id: IKey;
      };
    }>
  ) {
    const { developerId, id } = req.params;
    const { year, technologyId } = req.body;
    const devTechnology = await developerTechnology.update(developerId, id, {
      year,
      technologyId,
    });

    return devTechnology;
  }
}

export default new DeveloperTechnologyController();

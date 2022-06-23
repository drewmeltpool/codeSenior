import { IKey } from '../../types';
import { developerLanguage } from '../../Services';
import { FastifyRequest } from 'fastify';

class DeveloperLanguageController {
  public async findById(
    req: FastifyRequest<{ Params: { developerId: IKey } }>
  ) {
    const { developerId } = req.params;
    const devLanguage = await developerLanguage.findById(developerId);

    return devLanguage;
  }

  public async create(
    req: FastifyRequest<{
      Body: {
        language: string;
      };
      Params: {
        developerId: IKey;
      };
    }>
  ) {
    const { language } = req.body;
    const { developerId } = req.params;

    const devLanguage = await developerLanguage.create({
      language,
      developerId,
    });

    return devLanguage;
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

    const devLanguage = await developerLanguage.delete(developerId, id);

    return devLanguage;
  }

  public async update(
    req: FastifyRequest<{
      Params: {
        developerId: IKey;
        id: IKey;
      };
      Body: {
        language: string;
      };
    }>
  ) {
    const { developerId, id } = req.params;
    const { language } = req.body;

    const devLanguage = await developerLanguage.update(developerId, id, {
      language,
    });

    return devLanguage;
  }
}

export default new DeveloperLanguageController();

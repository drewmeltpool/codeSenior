import { FastifyRequest } from 'fastify';
import { IKey } from '../../types';
import { languageService } from '../../Services';

class LanguageController {
  public async retrieve() {
    const languages = await languageService.retrieve();

    return languages;
  }

  public async findById(req: FastifyRequest<{ Params: { id: IKey } }>) {
    const { id } = req.params;
    const languages = await languageService.findById(id);

    return languages;
  }

  public async create(
    req: FastifyRequest<{
      Body: { name: string };
    }>
  ) {
    const { name } = req.body;
    const languages = await languageService.create(name);

    return languages;
  }

  public async update(
    req: FastifyRequest<{
      Params: { id: IKey };
      Body: { name: string };
    }>
  ) {
    const { id } = req.params;
    const { name } = req.body;
    const languages = await languageService.update(id, name);

    return languages;
  }

  public async deleteById(req: FastifyRequest<{ Params: { id: IKey } }>) {
    const { id } = req.params;
    const languages = await languageService.deleteById(id);

    return languages;
  }
}

export default new LanguageController();

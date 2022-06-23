import { FastifyRequest } from 'fastify';
import { technologyService } from '../../Services';
import { IKey } from '../../types';

class TechnologyController {
  public async retrieve() {
    const techs = await technologyService.retrieve();
    return techs;
  }

  public async create(
    req: FastifyRequest<{
      Body: { name: string; icon: string; languageId: IKey };
    }>
  ) {
    const { name, icon, languageId } = req.body;
    const tech = await technologyService.create(name, icon, languageId);
    return tech;
  }

  public async findById(req: FastifyRequest<{ Params: { id: IKey } }>) {
    const { id } = req.params;
    const tech = await technologyService.findById(id);
    return tech;
  }

  public async update(
    req: FastifyRequest<{
      Params: { id: IKey };
      Body: { name: string; icon: string; languageId: IKey };
    }>
  ) {
    const { id } = req.params;
    const { name, icon, languageId } = req.body;
    const tech = await technologyService.update(id, name, icon, languageId);
    return tech;
  }

  public async deleteById(req: FastifyRequest<{ Params: { id: IKey } }>) {
    const { id } = req.params;
    const tech = await technologyService.deleteById(id);
    return tech;
  }
}

export default new TechnologyController();

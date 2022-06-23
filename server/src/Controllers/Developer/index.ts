import { IKey } from '../../types/IKey';
import { developerService } from '../../Services';
import { FastifyRequest } from 'fastify';

class DeveloperController {
  public async retrieve() {
    const recruiters = await developerService.retrieve();
    return recruiters;
  }

  public async update(
    req: FastifyRequest<{ Params: { id: IKey }; Body: any }>
  ) {
    const { id } = req.params;
    const data = req.body;

    const recruiters = await developerService.update(id, data);
    return recruiters;
  }

  public async findById(req: FastifyRequest<{ Params: { id: IKey } }>) {
    const { id } = req.params;

    const recruiter = await developerService.findById(id);
    return recruiter;
  }

  public async deleteById(
    req: FastifyRequest<{
      Params: { id: IKey };
    }>
  ) {
    const { id } = req.params;

    const recruiter = await developerService.deleteById(id);
    return recruiter;
  }
}

export default new DeveloperController();

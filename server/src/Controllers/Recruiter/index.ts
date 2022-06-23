import { IKey } from '../../types/IKey';
import { recruiterService } from '../../Services';
import { IRecruiter } from '../../types';
import { FastifyRequest } from 'fastify';

class RecruiterController {
  public async retrieve() {
    const recruiters = await recruiterService.retrieve();
    return recruiters;
  }

  public async findById(req: FastifyRequest<{ Params: { id: IKey } }>) {
    const { id } = req.params;

    const recruiter = await recruiterService.findById(id);
    return recruiter;
  }

  public async create(
    req: FastifyRequest<{
      Body: IRecruiter;
    }>
  ) {
    const data = req.body;

    const recruiter = await recruiterService.create(data);
    return recruiter;
  }

  public async update(
    req: FastifyRequest<{
      Params: { id: IKey };
      Body: IRecruiter;
    }>
  ) {
    const { id } = req.params;
    const data = req.body;

    const recruiter = await recruiterService.update(id, data);
    return recruiter;
  }

  public async deleteById(
    req: FastifyRequest<{
      Params: { id: IKey };
    }>
  ) {
    const { id } = req.params;

    const recruiter = await recruiterService.deleteById(id);
    return recruiter;
  }
}

export default new RecruiterController();

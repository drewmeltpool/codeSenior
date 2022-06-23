import { IRecruiter, IKey } from '../../types';
import { db } from '../../Database';

import postRepository from '../Post';

class RecruiterRepository {
  private readonly _db = () => db<IRecruiter>('Recruiter');

  public async create(data: IRecruiter) {
    const [recruiter] = await this._db().insert(data).returning('*');

    return recruiter;
  }

  public async findByUserId(userId: IKey) {
    const [recruiter] = await this._db()
      .select('*')
      .where({ userId })
      .returning('*');

    if (!recruiter) throw new Error('dont exist');

    const posts = await postRepository.findByRecruiterId(recruiter.id!);

    return { ...recruiter, posts };
  }

  public async findById(id: IKey) {
    const [recruiter] = await this._db()
      .select('*')
      .where({ id })
      .returning('*');

    if (!recruiter) throw new Error('dont exist');

    return recruiter;
  }

  public async deleteById(id: IKey) {
    const [recruiter] = await this._db().where({ id }).del().returning('*');

    return recruiter;
  }

  public async update(id: IKey, data: IRecruiter) {
    await this.findById(id);

    const [recruiter] = await this._db()
      .update(data)
      .where({ id })
      .returning('*');

    return recruiter;
  }

  public async retrieve() {
    const recruiter = await this._db().select('*').returning('*');

    return recruiter;
  }
}

export default new RecruiterRepository();

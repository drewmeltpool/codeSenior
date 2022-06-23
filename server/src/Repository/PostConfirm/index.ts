import { db } from '../../Database';
import { IKey, IPostConfirm } from '../../types';
import { nested } from '../../helpers';

class PostConfirmRepository {
  private readonly _db = () => db<IPostConfirm>('Post_Confirm');

  public async isApplied(postId: IKey, userId: IKey) {
    const [isExist] = await this._db()
      .select('*')
      .where({ postId, userId })
      .returning('*');

    return isExist || null;
  }

  public async postCandidates(postId: IKey) {
    const cadidates = await this._db()
      .select('*')
      .where({ postId })
      .join('User', 'userId', 'User.id')
      .returning('*');

    return cadidates;
  }

  public async create(postId: IKey, userId: IKey, date: string) {
    const isExist = await this._db()
      .select('*')
      .where({ postId, userId })
      .first();

    if (isExist) return new Error('Already created');

    const [post] = await this._db()
      .insert({ postId, userId, date })
      .returning('*');

    return post;
  }

  public async delete(postId: IKey, userId: IKey) {
    const [post] = await this._db()
      .del()
      .where({ postId, userId })
      .returning('*');

    return post;
  }

  public async findRecruiterPost(authorId: IKey) {
    const posts = await this._db()
      .select('*')
      .join('Post', 'authorId', 'Post.id')
      .where({ authorId })
      .returning('*');

    return posts;
  }

  public async findUserPost(userId: IKey) {
    const posts = await this._db()
      .select(
        'Post.id as id',
        'Post.title as title',
        'Post.description as description',
        'Post.position as position',
        'Post_Confirm.date as date',
        'Post.from as from',
        'Post.to as to',
        'User.id as author_id',
        'User.firstName as author_firstName',
        'Recruiter.companyName as author_companyName',
        'Recruiter.companyImage as author_companyImage',
        'User.lastName as author_lastName',
        'User.image as author_image',
        'User.title as author_title'
      )
      .join('Post', 'postId', 'Post.id')
      .join('Recruiter', 'Post.authorId', 'Recruiter.id')
      .join('User', 'Recruiter.userId', 'User.id')
      .where({ 'Post_Confirm.userId': userId })
      .returning('*');

    return nested(posts);
  }
}

export default new PostConfirmRepository();

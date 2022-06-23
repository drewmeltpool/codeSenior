import { db } from '../../Database';
import { IPost, IKey } from '../../types';
import { perPage } from '../../constants';
import { nested } from '../../helpers';

class PostRepository {
  private readonly _db = () => db<IPost>('Post');

  public async create(data: IPost): Promise<IPost> {
    const [post] = await this._db().insert(data).returning('*');

    return post;
  }

  public async findById(id: IKey) {
    const post = await this._db()
      .select(
        'Post.id as id',
        'Post.title as title',
        'Post.description as description',
        'Post.position as position',
        'Post.postDate as postDate',
        'Post.from as from',
        'Post.to as to',
        'Post.bonuses as bonuses',
        'Post.additional as additional',
        'Post.requirement as requirement',
        'User.id as author_id',
        'User.firstName as author_firstName',
        'User.lastName as author_lastName',
        'User.image as author_image',
        'User.title as author_title',
        'Recruiter.companyName as author_companyName',
        'Recruiter.companyImage as author_companyImage',
        'Recruiter.aboutCompany as author_aboutCompany'
      )
      .join('Recruiter', 'authorId', 'Recruiter.id')
      .join('User', 'userId', 'User.id')
      .where({ 'Post.id': id })
      .first();

    if (!post) throw new Error('cannot find post');

    return nested(post);
  }

  public async delete(id: IKey): Promise<IPost> {
    const [post] = await this._db().where({ id }).del().returning('*');

    return post;
  }

  public async update(id: IKey, data: IPost): Promise<IPost> {
    await this.findById(id);

    const [post] = await this._db().update(data).where({ id }).returning('*');

    return post;
  }

  public async retrieve(currentPage: number, id: number): Promise<any> {
    const posts = await this._db()
      .select(
        'Post.id as id',
        'Post.title as title',
        'Post.description as description',
        'Post.position as position',
        'Post.postDate as postDate',
        'Post.from as from',
        'Post.to as to',
        'User.id as author_id',
        'User.firstName as author_firstName',
        'User.lastName as author_lastName',
        'User.image as author_image',
        'User.title as author_title',
        'Recruiter.companyName as author_companyName',
        'Recruiter.companyImage as author_companyImage'
      )
      .join('Recruiter', 'authorId', 'Recruiter.id')
      .join('User', 'userId', 'User.id')
      .orderBy('postDate', 'desc')
      .paginate({
        isLengthAware: true,
        perPage,
        currentPage,
      });

    const { data, pagination } = posts;

    return { data: nested(data), pagination };
  }
  public async findByRecruiterId(authorId: IKey) {
    const posts = await this._db()
      .select('*')
      .where({ authorId })
      .returning('*');

    return posts;
  }
}

export default new PostRepository();

import { IKey } from '../../types';
import { postConfirmRepository } from '../../Repository';

class PostConfirmService {
  public async isApplied(postId: IKey, userId: IKey) {
    const post = postConfirmRepository.isApplied(postId, userId);

    return post;
  }

  public async delete(postId: IKey, userId: IKey) {
    const post = postConfirmRepository.delete(postId, userId);

    return post;
  }

  public async create(postId: IKey, userId: IKey, date: string) {
    const post = postConfirmRepository.create(postId, userId, date);

    return post;
  }

  public async findRecruiterPost(authorId: IKey) {
    const posts = postConfirmRepository.findRecruiterPost(authorId);

    return posts;
  }

  public async findUserPost(userId: IKey) {
    const posts = postConfirmRepository.findUserPost(userId);

    return posts;
  }

  public async postCandidates(postId: IKey) {
    const posts = postConfirmRepository.postCandidates(postId);

    return posts;
  }
}

export default new PostConfirmService();

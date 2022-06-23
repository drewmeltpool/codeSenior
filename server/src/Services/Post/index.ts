import { IPost, IKey } from '../../types';
import { postRepository } from '../../Repository';

class PostService {
  public retrieve(currentPage: number, id: number) {
    const posts = postRepository.retrieve(currentPage, id);

    return posts;
  }

  public create(data: IPost) {
    const post = postRepository.create(data);

    return post;
  }

  public update(id: IKey, data: IPost) {
    const post = postRepository.update(id, data);

    return post;
  }

  public findById(id: string) {
    const post = postRepository.findById(id);

    return post;
  }

  public delete(id: string) {
    const post = postRepository.delete(id);

    return post;
  }

  public findByRecruiterId(recruiterId: string) {
    const post = postRepository.findByRecruiterId(recruiterId);

    return post;
  }
}

export default new PostService();

import * as recruiterAction from './actions';
import * as api from 'src/api';

export const updateRecruiter =
  (data: any) => async (dispatch: any, store: any) => {
    const id = store().recruiter.id;

    const [profile] = await api.recruiter.update(id, data);

    dispatch(recruiterAction.updateRecruiter(profile));
  };

export const createRecruiterPost =
  (data: any) => async (dispatch: any, store: any) => {
    const [post] = await api.post.create(data);
    const posts = [...store().recruiter.posts, post];

    dispatch(recruiterAction.createRecruiterPost(posts));
  };

export const deleteRecruiterPost =
  (id: any) => async (dispatch: any, store: any) => {
    await api.post.del(id);

    const posts = store().recruiter.posts.filter((post: any) => {
      return post.id !== id;
    });

    dispatch(recruiterAction.deleteRecruiterPost(posts));
  };

export const updateRecruiterPost =
  (id: any, data: any) => async (dispatch: any, store: any) => {
    const [post] = await api.post.update(id, data);

    const posts = [...store().recruiter.posts];
    const idx = posts.findIndex((post) => post.id === id);

    posts[idx] = post;

    dispatch(recruiterAction.updateRecruiterPost(posts));
  };

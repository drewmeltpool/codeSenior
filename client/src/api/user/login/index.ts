import { axios } from 'src/utils';

import { request } from 'src/utils';

export const login = async (data: { email: string; password: string }) => {
  const response = await request<{ accessToken: string; user: any }>(
    axios.post(`user/login`, data)
  );

  const [{ accessToken }, userError] = response;

  if (!userError) localStorage.setItem('token', accessToken);

  return response;
};

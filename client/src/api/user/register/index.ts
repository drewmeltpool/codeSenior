import { axios } from 'src/utils';

import { request } from 'src/utils';

export const register = async (data: {
  email: string;
  password: string;
  userTableNameId: string;
}) => {
  const response = await request<{ accessToken: string; user: any }>(
    axios.post(`user/register`, data)
  );

  const [{ accessToken }, userError] = response;

  if (!userError) localStorage.setItem('token', accessToken);

  return response;
};

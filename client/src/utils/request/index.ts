import axios, { AxiosResponse } from 'axios';

export const request = async <T = any>(
  fn: Promise<AxiosResponse<T>>
): Promise<[T, string | undefined]> => {
  try {
    const { data } = await fn;

    return [data, undefined];
  } catch (err) {
    const error =
      axios.isAxiosError(err) && err.response ? err.response.data.message : err;

    return [{} as T, error];
  }
};

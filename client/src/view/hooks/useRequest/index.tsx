import { useEffect, useState } from 'react';

const useRequest = (request: any, dep = [] as Array<any>) => {
  const [info, setInfo] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setInfo({
        data: null,
        error: null,
        loading: true,
      });

      const [data, error] = await request();
      setInfo({
        data,
        error,
        loading: false,
      });
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dep);

  const { data, error, loading } = info;

  return { data, error, loading } as {
    data: any;
    loading: boolean;
    error: any;
  };
};

export default useRequest;

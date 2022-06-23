const parser = (obj: any, keys: any, value: any) => {
  const lastkey = keys.pop();

  const current = keys.reduce((acc: any, key: any) => {
    if (!acc[key]) acc[key] = {};

    return acc[key];
  }, obj);

  current[lastkey] = value;

  return obj;
};

const parserHelper = (obj: any) => {
  let tmp = {};
  const entries = Object.entries(obj);

  entries.forEach(([key, value]) => {
    const keys = key.split('_');
    tmp = parser(tmp, keys, value);
  });

  return tmp;
};

export const nested = (data: any): any => {
  if (Array.isArray(data)) return data.map(parserHelper);

  return parserHelper(data);
};

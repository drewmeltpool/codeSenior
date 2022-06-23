export const pipe =
  <T>(...fns: Array<(_arg: any) => T>) =>
  (x: T) =>
    fns.reduce((acc, fn) => fn(acc), x);

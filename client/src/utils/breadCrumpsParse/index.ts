import { pipe } from '../pipe';

export const breadCrumpsParse = pipe(
  (arg) => arg.split('/'),
  (arg) =>
    arg.map((i: string, key: number) => ({
      name: i,
      path: arg.filter((_: never, ind: number) => ind <= key).join('/'),
    })),
  (arg) => arg.slice(1),
  (arg) => [{ path: '/', name: 'home' }, ...arg]
);

// const breadCrumpsParse = (url: string) => {
//   const splitedUrl = url.split('/');
//   return splitedUrl.reduce((acc: any, i: any, key: number) => {
//     if (key >= splitedUrl.length - 1) return acc;
//     const path = splitedUrl.filter((_, ind) => ind <= key).join('/');
//     const item = {
//       name: key ? i : 'home',
//       path: key ? path : '/',
//     };
//     return [...acc, item];
//   }, []);
// };

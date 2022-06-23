// const COLORS = [
//   '#f94144',
//   '#f3722c',
//   '#f8961e',
//   '#f9844a',
//   '#f9c74f',
//   '#90be6d',
//   '#43aa8b',
//   '#4d908e',
//   '#577590',
//   '#277da1',
// ];

const COLORS = [
  '#ff595e',
  '#ff924c',
  '#ffca3a',
  '#c5ca30',
  '#36949d',
  '#1982c4',
  '#4267ac',
  '#565aa0',
  '#6a4c93',
];

export const generateHex = (str: string): string => {
  const hash = String(str)
    .split('')
    .reduce((hash, char) => char.charCodeAt(0) + hash, 0);

  return COLORS[hash % COLORS.length];
};

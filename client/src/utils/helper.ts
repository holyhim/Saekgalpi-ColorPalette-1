/* eslint-disable */

export const genRandomHexCode = (): string => {
  const sample = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];

  const HexCode = Array(6)
    .fill(0)
    .map((code) => (code = sample[Math.floor(Math.random() * sample.length)]))
    .join('');

  return `#${HexCode}`;
};

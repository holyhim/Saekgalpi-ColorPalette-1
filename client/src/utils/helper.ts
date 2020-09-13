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

export const getPaletteImage = (colorCode: string[]): void => {
  const paletteContainer = document.createElement('canvas');
  const ctx = paletteContainer.getContext('2d');

  paletteContainer.width = 300;
  paletteContainer.height = 150;

  const colorWidth = 300 / colorCode.length;
  const colorHeight = 150;

  colorCode.forEach((color: string, i: number) => {
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(i * colorWidth, 0, colorWidth, colorHeight);
    }
  });

  const dataUrl = paletteContainer.toDataURL();
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = '색갈피';
  link.click();
};

export const convertHex = (hex: string): string => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const result = `rgb(${r}, ${g}, ${b})`;
  return result;
};

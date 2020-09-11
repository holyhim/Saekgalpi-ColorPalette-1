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

export const getPaletteImage = (colorCode: string[]) => {
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

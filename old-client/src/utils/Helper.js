//모든 헬퍼 함수를 작성합니다.
//숫자에 맞게 div를 설정하는 함수가 들어가야 합니다.

/* eslint-disable */

export const DivHelp = (num) => {
    //TO DO:
};

export const genRandomHexCode = () => {
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
        .map(
            (code) => (code = sample[Math.floor(Math.random() * sample.length)])
        )
        .join('');

    return `#${HexCode}`;
};

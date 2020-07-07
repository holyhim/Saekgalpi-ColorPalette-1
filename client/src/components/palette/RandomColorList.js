// 랜덤컬러 전체 그리드
import React from 'react';
import RandomColorListEntry from './RandomColorListEntry';
import styled from 'styled-components';

const RandomColorsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    height: 40vh;
`;

const fakeColors = [
    '#FFC312',
    '#F79F1F',
    '#C4E538',
    '#0652DD',
    '#1B1464',
    '#9980FA',
    '#B53471',
];

const RandomColorList = () => {
    return (
        <>
            <RandomColorsContainer>
                {fakeColors.map((color, idx) => (
                    <RandomColorListEntry key={idx} color={color} />
                    // 추후 키값은 상의해서 변경 예정
                ))}
            </RandomColorsContainer>
        </>
    );
};

export default RandomColorList;

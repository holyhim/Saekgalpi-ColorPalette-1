// 랜덤컬러 전체 그리드
import React from 'react';
import RandomColorListEntry from './RandomColorListEntry';
import styled from 'styled-components';
import { genRandomHexCode } from '../../Helper';

const RandomColorsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    height: 40vh;
`;

const RandomColorList = () => {
    const randomColors = Array(7)
        .fill(0)
        .map((color) => (color = genRandomHexCode()));

    return (
        <>
            <RandomColorsContainer>
                {randomColors.map((color, idx) => (
                    <RandomColorListEntry key={idx} color={color} />
                ))}
            </RandomColorsContainer>
        </>
    );
};

export default RandomColorList;

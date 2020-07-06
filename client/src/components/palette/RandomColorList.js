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

const RandomColorList = () => {
    // TODO: Main페이지 렌더되었을 때 랜덤컬러 7개 생성하는 헬퍼함수 제작
    const fakeColor = [
        '#FFC312',
        '#F79F1F',
        '#C4E538',
        '#0652DD',
        '#1B1464',
        '#9980FA',
        '#B53471',
    ];

    return (
        <>
            <h3 className='random-colors__title'>랜덤컬러 생성기</h3>
            <RandomColorsContainer>
                {fakeColor.map((color, idx) => (
                    <RandomColorListEntry key={idx} color={color} />
                    // 추후 키값은 상의해서 변경 예정
                ))}
            </RandomColorsContainer>
        </>
    );
};

export default RandomColorList;

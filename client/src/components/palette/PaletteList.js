// 전체 팔레트 그리드
import React from 'react';
import PaletteListEntry from './PaletteListEntry';
import styled from 'styled-components';

const PalettesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(
        ${(props) => props.number},
        minmax(200px, 1fr)
    );
    grid-auto-rows: 1fr;
    gap: 20px;
    margin-bottom: 50px;
`;
// TODO: 8번째줄 개수 변수처리

const fakePalette = [
    '팔레트1',
    '팔레트2',
    '팔레트3',
    '팔레트4',
    '팔레트5',
    '팔레트6',
    '팔레트7',
    '팔레트8',
];

const PaletteList = () => {
    //주석 나중에 제거하거나 다듬을 것
    //map 돌려서 리스트 만들기

    return (
        <PalettesWrapper number={4}>
            {fakePalette.map((palette, idx) => (
                <PaletteListEntry key={idx} palette={palette} />
                // 추후 키값은 상의해서 변경 예정
            ))}
        </PalettesWrapper>
    );
};

export default PaletteList;

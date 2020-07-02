// 전체 팔레트 그리드
import React from 'react';
import PaletteListEntry from './PaletteListEntry';

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
        <div>
            {fakePalette.map((palette, idx) => (
                <PaletteListEntry key={idx} palette={palette} />
                // 추후 키값은 상의해서 변경 예정
            ))}
        </div>
    );
};

export default PaletteList;

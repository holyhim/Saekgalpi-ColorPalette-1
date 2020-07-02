// 랜덤컬러 전체 그리드
import React from 'react';
import RandomColorListEntry from './RandomColorListEntry';

const RandomColorList = () => {
    // TODO: Main페이지 렌더되었을 때 랜덤컬러 7개 생성하는 헬퍼함수 제작
    const fakeColor = [
        '가짜',
        '컬러',
        '데이터',
        '입니다',
        '추후',
        '수정',
        '예정',
    ];

    return (
        <section>
            <h3>랜덤컬러 생성기</h3>
            <div>
                {fakeColor.map((color, idx) => (
                    <RandomColorListEntry key={idx} color={color} />
                    // 추후 키값은 상의해서 변경 예정
                ))}
            </div>
        </section>
    );
};

export default RandomColorList;

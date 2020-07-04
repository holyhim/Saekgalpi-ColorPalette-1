// 낱개 팔레트 회원과 해당 팔레의 userid가 같다면 딜리트 버튼이 있어야 함
import React, { useState } from 'react';
import styled from 'styled-components';

const PaletteWrapper = styled.div`
    position: 'relative';
    width: 200px;
    height: 200px;
`;

const PaletteListEntry = () => {
    //주석 나중에 제거하거나 다듬을 것
    //숫자에 맞게 div를 생성하는 헬퍼 함수를 만들어야 합니다 -> 받은 숫자에 맞게 map으로 div를 만들어주는 건 어떨까요?
    const [isMouseOver, setIsMouseOver] = useState(false);

    const toggleInfo = () => {
        setIsMouseOver((prevState) => !prevState);
    };

    return (
        <PaletteWrapper className='palette__wrapper'>
            {/* wrapper */}
            <PaletteColors
                className='palette__colors'
                onMouseOver={toggleInfo}
                onMouseOut={toggleInfo}
                number={2}
            >
                {/* div를 묶어 줘야 됨 */}
                <div
                    className='palette__color'
                    style={{ backgroundColor: '#3742fa' }}
                >
                    +
                </div>
                <div
                    className='palette__color'
                    style={{ backgroundColor: '#1e90ff' }}
                >
                    +
                </div>
            </PaletteColors>
            {isMouseOver ? (
                <PaletteInfo className='palette__info--hidden'>
                    {/* hover page */}
                    <span className='palette__title'>타이틀</span>
                    <div className='palette__icons'>
                        <button className='palette__like'>ㅁ</button>
                        <button className='palette__save'>저장</button>
                        <button className='palette__share'>공유</button>
                    </div>
                </PaletteInfo>
            ) : (
                <></>
            )}
            <button className='palette__delete--hidden'>삭제</button>
        </PaletteWrapper>
    );
};

export default PaletteListEntry;

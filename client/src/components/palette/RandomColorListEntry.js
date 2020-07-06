import React, { useState } from 'react';
import styled from 'styled-components';

const RandomColorWrapper = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

const RandomColor = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.color || 'blue'};
`;
// TODO: 추후 데이터받아서 props.color로 넘겨주기

const RandomColorInfo = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    background-color: #f6f8fa;
    padding: 5px 0;
    bottom: 0px;
`;

const RandomColorListEntry = ({ color }) => {
    // TODO: 마우스 컬러 div에 마우스가 올라갔는지를 판별하는 state 작성
    const [isMouseOver, setIsMouseOver] = useState(false);

    const toggleInfo = () => {
        setIsMouseOver((prevState) => !prevState);
    };

    return (
        <RandomColorWrapper className='random-color__wrapper'>
            <RandomColor
                className='random-color__color'
                onMouseOver={toggleInfo}
                onMouseOut={toggleInfo}
                color={color}
            />
            {isMouseOver ? (
                <RandomColorInfo className='random-color__info--hidden'>
                    {/* state 값이 true라면 display: 'block이나 flex'  / false라면 display: 'none' */}
                    {/* 혹은 className을 바꿔주고 나머지는 CSS로 제어해도 괜찮읍니다^^ */}
                    <span className='random-color__color-code'>
                        컬러정보(임시)
                    </span>
                </RandomColorInfo>
            ) : (
                <></>
            )}
        </RandomColorWrapper>
    );
};

export default RandomColorListEntry;

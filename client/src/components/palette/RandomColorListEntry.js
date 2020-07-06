import React from 'react';
import styled from 'styled-components';
import './RandomColorListEntry.scss';

const RandomColor = styled.div`
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: ${(props) => props.color || 'blue'};
`;
// TODO: 추후 데이터받아서 props.color로 넘겨주기

const RandomColorListEntry = ({ color }) => {
    // TODO: 마우스 컬러 div에 마우스가 올라갔는지를 판별하는 state 작성

    return (
        <div className='random-color__wrapper'>
            <RandomColor className='random-color__color' color={color} />
            <div className='random-color__info--hidden'>
                <span className='random-color__color-code'>컬러정보(임시)</span>
            </div>
        </div>
    );
};

export default RandomColorListEntry;

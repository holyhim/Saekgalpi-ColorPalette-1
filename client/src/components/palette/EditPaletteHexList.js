import React from 'react';
import styled from 'styled-components';

const HexLists = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 1fr);
    grid-template-rows: 200px;
`;
// TODO: 추후 데이터받아서 props.number로 넘겨주기

const PaletteHex = styled.div`
    width: 500px
    height: 200px;
    border: 1px solid black;
`;

const EditPaletteHexList = () => {
    //주석 나중에 제거하거나 다듬을 것
    //컬러 api 사용
    //숫자에 맞게 div를 생성하는 헬퍼 함수를 만들어야 합니다
    const createDIVbox = (range) => {
        //갯수에 맞게 div 갯수 만들거나 줄임
    };
    return (
        <HexLists
            className='edit-palette__hex-lists'
            onChange={createDIVbox}
            number={2}
        >
            {/*2개부터 7개까지 div*/}
            <PaletteHex className='edit-palette__hex'>hex, rgb</PaletteHex>
            <PaletteHex className='edit-palette__hex'>hex, rgb</PaletteHex>
        </HexLists>
    );
};

export default EditPaletteHexList;

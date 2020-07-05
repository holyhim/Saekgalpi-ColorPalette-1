import React from 'react';
import styled from 'styled-components';
import EditPaletteHexListEntry from './EditPaletteHexListEntry';

const HexLists = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 1fr);
    grid-template-rows: 200px;
`;
// TODO: 추후 데이터받아서 props.number로 넘겨주기

const EditPaletteHexList = () => {
    const fakeColors = ['#000000', '#000000', '#000000'];
    //주석 나중에 제거하거나 다듬을 것
    //컬러 api 사용
    // 헬퍼함수 대신에 컴포로 빼서 map으로 뿌려주겠읍니다

    return (
        <HexLists className='edit-palette__hex-lists' number={3}>
            {fakeColors.map((color, idx) => (
                <EditPaletteHexListEntry color={color} key={idx} />
            ))}
        </HexLists>
    );
};

export default EditPaletteHexList;

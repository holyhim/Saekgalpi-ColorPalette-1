import React, { useState } from 'react';
import styled from 'styled-components';
import EditPaletteListEntry from './EditPaletteListEntry';

const ColorLists = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 1fr);
    grid-template-rows: 200px;
`;
// TODO: 추후 데이터받아서 props.number로 넘겨주기

const EditPaletteList = () => {
    const [colors, setColors] = useState(['#0652DD', '#0652DD', '#0652DD']);
    // 초기값: 들어온 컬러 숫자에 맞는 길이의 배열 => 상위컴포넌트 / Edit, Make palette에서 관리하는 color state가 하나는 있어야해
    //주석 나중에 제거하거나 다듬을 것
    //컬러 api 사용

    const setNthColor = (idx, color) => {
        setColors((prevState) => [
            ...prevState.slice(0, idx),
            color,
            ...prevState.slice(idx + 1),
        ]);
    };

    return (
        <>
            <ColorLists
                className='edit-palette__color-lists'
                number={colors.length}
            >
                {/*2개부터 7개까지 div*/}
                {colors.map((paletteColor, idx) => (
                    <EditPaletteListEntry
                        paletteColor={paletteColor}
                        idx={idx}
                        key={idx}
                        setNthColor={setNthColor}
                    />
                ))}
            </ColorLists>
        </>
    );
};

export default EditPaletteList;

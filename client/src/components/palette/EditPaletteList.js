import React from 'react';
import styled from 'styled-components';
import EditPaletteListEntry from './EditPaletteListEntry';

// TODO: 반응형을 한다면 grid를 세로로 세우기: 컬러피커끼리 겹침
const ColorLists = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 1fr);
    grid-template-rows: 20vh;
`;

const EditPaletteList = ({ number, colors, setNthColor }) => {
    return (
        <>
            <ColorLists className='edit-palette__color-lists' number={number}>
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

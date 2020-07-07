import React from 'react';
import styled from 'styled-components';
import EditPaletteHexListEntry from './EditPaletteHexListEntry';

const HexLists = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 1fr);
    grid-template-rows: 20vh;
`;

const EditPaletteHexList = ({ number, colors }) => {
    return (
        <HexLists className='edit-palette__hex-lists' number={number}>
            {colors.map((color, idx) => (
                <EditPaletteHexListEntry color={color} key={idx} />
            ))}
        </HexLists>
    );
};

export default EditPaletteHexList;

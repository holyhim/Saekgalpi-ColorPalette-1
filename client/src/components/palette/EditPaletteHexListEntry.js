import React from 'react';
import styled from 'styled-components';
import rgbHexColorCodeConverter from 'hex-rgb-color-code-converter';

const PaletteHex = styled.div`
    border: 1px solid black;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
`;

const ColorCode = styled.span`
    place-self: center center;
`;

const EditPaletteHexListEntry = ({ color }) => {
    return (
        <PaletteHex className='edit-palette__hex'>
            <ColorCode className='palette__hex'>{color}</ColorCode>
            <ColorCode className='palette__rgb'>
                {rgbHexColorCodeConverter(color)}
            </ColorCode>
        </PaletteHex>
    );
};

export default EditPaletteHexListEntry;

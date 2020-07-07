import React from 'react';
import PaletteListEntry from './PaletteListEntry';
import styled from 'styled-components';

const PalettesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(
        ${(props) => props.number},
        minmax(200px, 1fr)
    );
    grid-auto-rows: 1fr;
    gap: 20px;
    margin-bottom: 50px;
`;

const PaletteList = ({ dispatch, palettes }) => {
    return (
        <PalettesWrapper number={4}>
            {palettes.map((palette, idx) => (
                <PaletteListEntry
                    key={idx}
                    palette={palette}
                    dispatch={dispatch}
                />
            ))}
        </PalettesWrapper>
    );
};

export default PaletteList;

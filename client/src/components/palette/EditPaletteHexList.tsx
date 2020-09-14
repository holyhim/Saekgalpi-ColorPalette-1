import React from 'react';
import styled from 'styled-components';
import EditPaletteHexListEntry from './EditPaletteHexListEntry';

type EditPaletteHexListProp = {
  number: number;
  colors: string[];
};

const HexLists = styled.div<{ number: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.number}, 1fr);
`;

function EditPaletteHexList({ number, colors }: EditPaletteHexListProp) {
  return (
    <HexLists className='edit-palette__hex-lists' number={number}>
      {colors.map((color: string, idx: number) => (
        <EditPaletteHexListEntry color={color} key={idx} />
      ))}
    </HexLists>
  );
}

export default EditPaletteHexList;

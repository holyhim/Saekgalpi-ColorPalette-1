import React from 'react';
import styled from 'styled-components';
import EditPaletteHexListEntry from './EditPaletteHexListEntry';

type EditPaletteHexListProp = {
  number: number;
  colors: string[];
};

type HexListsProp = {
  number: number;
};

const HexLists = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props: HexListsProp) => props.number}, 1fr);
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

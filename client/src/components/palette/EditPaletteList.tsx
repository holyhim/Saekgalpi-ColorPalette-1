import React from 'react';
import styled from 'styled-components';
import EditPaletteListEntry from './EditPaletteListEntry';

type EditPaletteListProp = {
  number: number;
  colors: string[];
  setNthColor: (idx: number, color: string) => void;
};

type ColorListsProp = {
  number: number;
};

const ColorLists = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props: ColorListsProp) => props.number},
    1fr
  );
  grid-template-rows: 20vh;
`;

function EditPaletteList({ number, colors, setNthColor }: EditPaletteListProp) {
  return (
    <>
      <ColorLists className='edit-palette__color-lists' number={number}>
        {colors.map((paletteColor: string, idx: number) => (
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
}

export default EditPaletteList;

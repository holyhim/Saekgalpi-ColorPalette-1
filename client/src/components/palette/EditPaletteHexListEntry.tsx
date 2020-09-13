import React from 'react';
import styled from 'styled-components';
import { convertHex } from '../../utils/helper';

type EditPaletteHexListEntryProp = {
  color: string;
};

const PaletteHex = styled.div`
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  margin: 10px;
  padding: 5px;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
`;

const ColorCode = styled.span`
  place-self: center center;
  color: #7a7a7a;
`;

function EditPaletteHexListEntry({ color }: EditPaletteHexListEntryProp) {
  return (
    <PaletteHex className='edit-palette__hex'>
      <ColorCode className='palette__hex'>{color}</ColorCode>
      <ColorCode className='palette__rgb'>{convertHex(color)}</ColorCode>
    </PaletteHex>
  );
}

export default EditPaletteHexListEntry;

import React from 'react';
import PaletteListEntry from './PaletteListEntry';

import { PaletteData } from '../../apis/paletteAPI';

import styled from 'styled-components';

const PalettesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  gap: 20px;
  margin-bottom: 50px;
`;

type PaletteListProps = {
  palettes: PaletteData[];
};

function PaletteList({ palettes }: PaletteListProps) {
  return (
    <PalettesWrapper>
      {palettes.map((palette: PaletteData, idx: number) => (
        <PaletteListEntry key={idx} palette={palette} />
      ))}
    </PalettesWrapper>
  );
}

export default PaletteList;

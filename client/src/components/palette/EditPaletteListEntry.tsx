import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import styled from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';

type EditPaletteListEntryProp = {
  paletteColor: string;
  idx: number;
  setNthColor: (idx: number, color: string) => void;
  number: number;
};

type PaletteColorProp = {
  color: string;
};

type ColorPickerContainerProp = {
  isOpen: boolean;
  left: number;
};

const PaletteColor = styled.div`
    background-color: ${(props: PaletteColorProp) => props.color};
    cursor: pointer;
    box-shadow: 
    1px 0 0 0 #c7c7c7, 
    0 1px 0 0 #c7c7c7, 
    1px 1px 0 0 #c7c7c7,
    1px 0 0 0 #c7c7c7 inset, 
    0 1px 0 0 #c7c7c7 inset;
}
`;

const ColorPickerContainer = styled.div`
  display: ${(props: ColorPickerContainerProp) =>
    props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 200px;
  left: ${(props: ColorPickerContainerProp) => props.left}px;
  padding: 10px;
  z-index: 1;

  .color-picker__button {
    margin-top: 10px;
    width: 220px;
    text-align: center;
    border: 1px solid #c7c7c7;
    background-color: white;
    outline: none;
    cursor: pointer;
    color: #c7c7c7;
    border-radius: 5px;
    &:active {
      color: #2a2a2a;
    }
  }
`;

function EditPaletteListEntry({
  paletteColor,
  idx,
  setNthColor,
  number,
}: EditPaletteListEntryProp) {
  const [color, setColor] = useState(paletteColor);
  const [isOpen, setIsOpen] = useState(false);

  const togglePicker = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onChange = (color: any) => {
    setColor(color.hex);
  };

  return (
    <>
      <PaletteColor
        className='edit-palette__color'
        color={color}
        onClick={togglePicker}
      ></PaletteColor>
      <ColorPickerContainer
        className='color-picker__container'
        left={
          ((useWindowSize()[0] * 0.7) / number) * (idx + 0.5) +
          ((useWindowSize()[0] * 0.7) / number) * 0.6
        }
        isOpen={isOpen}
      >
        <SketchPicker
          className='color-picker'
          color={color}
          onChange={onChange}
        />
        <button
          className='color-picker__button'
          onClick={() => {
            setNthColor(idx, color);
            togglePicker();
          }}
        >
          저장
        </button>
      </ColorPickerContainer>
    </>
  );
}
export default EditPaletteListEntry;

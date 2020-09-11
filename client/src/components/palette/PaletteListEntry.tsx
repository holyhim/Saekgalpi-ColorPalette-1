import React from 'react';
import { Link } from 'react-router-dom';

import { PaletteData } from '../../apis/paletteAPI';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CopyToClipboard from 'react-copy-to-clipboard';
import { getPaletteImage } from '../../utils/helper';

import {
  faHeart,
  faArrowDown,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import usePalette from '../../hooks/usePalette';

type PaletteListEntryProps = {
  palette: PaletteData;
};

type PaletteColorsProps = {
  number: number;
};

type PaletteColorProps = {
  color: string;
};

const PaletteColors = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(
    ${(props: PaletteColorsProps) => props.number},
    2fr
  );
  width: 280px;
  height: 160px;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 15px 15px 0 15px;
  background-color: white;
`;

const PaletteColor = styled.div`
  background-color: ${(props: PaletteColorProps) => props.color};
  &:nth-child(1) {
    border-radius: 15px 0 0 15px;
  }
  &:nth-last-child(1) {
    border-radius: 0 15px 0 0;
  }
`;

const PaletteListEntry = ({ palette }: PaletteListEntryProps) => {
  const {
    id,
    paletteName,
    colorCode01,
    colorCode02,
    colorCode03,
    colorCode04,
    colorCode05,
    colorCode06,
    colorCode07,
  } = palette;

  const colorCode = [
    colorCode01,
    colorCode02,
    colorCode03,
    colorCode04,
    colorCode05,
    colorCode06,
    colorCode07,
  ].filter((code) => code !== null);

  const { setPalette } = usePalette();

  const onClickPalette = (e: React.MouseEvent<HTMLElement>) => {
    setPalette(palette);
  };

  const onClickDownload = async (e: React.MouseEvent<HTMLElement>) => {
    getPaletteImage(colorCode);
  };

  return (
    <div className='palette__wrapper'>
      <Link to={`/paletteDetail/${id}`}>
        <PaletteColors
          className='palette__colors'
          number={colorCode.length}
          onClick={onClickPalette}
        >
          {colorCode.map((color: string, idx: number) => (
            <PaletteColor className='palette__color' color={color} key={idx} />
          ))}
        </PaletteColors>
      </Link>
      <div className='palette__info--hidden'>
        <span className='palette__title'>{paletteName}</span>
        <div className='palette__icons'>
          <button className='palette__like'>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button className='palette__save' onClick={onClickDownload}>
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <CopyToClipboard text={`http://localhost:3000/${id}`}>
            <button className='palette__share'>
              <FontAwesomeIcon icon={faShareAlt} />
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <button className='palette__delete--hidden'>삭제</button>
    </div>
  );
};

export default PaletteListEntry;

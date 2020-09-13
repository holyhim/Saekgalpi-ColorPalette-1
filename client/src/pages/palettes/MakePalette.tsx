import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Slider, Input } from 'antd';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';

import { paletteCreatePostAPI } from '../../apis/paletteAPI';

const MakePaletteContainer = styled.section`
  width: 70vw;
  margin-bottom: 20px;
`;

const { TextArea } = Input;

type Action =
  | { type: 'SET_PALETTE_TITLE'; title: string }
  | { type: 'SET_PALETTE_NUMBER'; number: number }
  | { type: 'SET_PALETTE_DESCRIPTION'; description: string }
  | { type: 'SET_PALETTE_COLORS'; colors: string[] };

type makePaletteState = {
  title: string;
  number: number;
  description: string;
  colors: string[];
};

const initialState: makePaletteState = {
  title: '',
  number: 5,
  description: '',
  colors: [...Array(5).fill('#ffffff')],
};

function paletteReducer(
  state: makePaletteState = initialState,
  action: Action
): makePaletteState {
  switch (action.type) {
    case 'SET_PALETTE_TITLE': {
      return { ...state, title: action.title };
    }
    case 'SET_PALETTE_NUMBER': {
      return {
        ...state,
        number: action.number,
      };
    }
    case 'SET_PALETTE_DESCRIPTION': {
      return {
        ...state,
        description: action.description,
      };
    }
    case 'SET_PALETTE_COLORS': {
      return {
        ...state,
        colors: action.colors,
      };
    }
    default: {
      return state;
    }
  }
}

function MakePalette() {
  const [state, dispatch] = useReducer(paletteReducer, initialState);
  const { title, number, description, colors } = state;

  const onChangeColorNumber = (e: number) => {
    dispatch({ type: 'SET_PALETTE_NUMBER', number: e });
  };

  useEffect(() => {
    if (number > colors.length) {
      const diff = Array(number - colors.length).fill('#ffffff');
      dispatch({
        type: 'SET_PALETTE_COLORS',
        colors: [...colors, ...diff],
      });
    } else if (number < colors.length) {
      dispatch({
        type: 'SET_PALETTE_COLORS',
        colors: [...colors.slice(0, number)],
      });
    }
  }, [number, colors]);

  const handleInputValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === 'title') {
      dispatch({ type: 'SET_PALETTE_TITLE', title: e.target.value });
    } else if (e.target.name === 'description') {
      dispatch({
        type: 'SET_PALETTE_DESCRIPTION',
        description: e.target.value,
      });
    }
  };

  const setNthColor = (idx: number, color: string) => {
    dispatch({
      type: 'SET_PALETTE_COLORS',
      colors: [...colors.slice(0, idx), color, ...colors.slice(idx + 1)],
    });
  };

  const onClickPostButton = async () => {
    await paletteCreatePostAPI({
      id: 1,
      paletteName: title,
      description,
      colorCode01: colors[0],
      colorCode02: colors[1],
      colorCode03: colors[2],
      colorCode04: colors[3],
      colorCode05: colors[4],
      colorCode06: colors[5],
      colorCode07: colors[6],
    });
  };

  return (
    <main>
      <span className='h1'>색갈피 만들기</span>
      <div className='makePageWrapper'>
        <MakePaletteContainer className='make-palette__color-container'>
          <EditPaletteList
            number={number}
            colors={colors}
            setNthColor={setNthColor}
          />
        </MakePaletteContainer>
        <MakePaletteContainer className='make-palette__hex-container'>
          <EditPaletteHexList number={number} colors={colors} />
        </MakePaletteContainer>
        <section className='make-palette__palette-info'>
          <form
            className='palette-info__form'
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className='palette-info__color-range-label'>색상 갯수</label>
            <Slider
              min={2}
              max={7}
              step={1}
              defaultValue={number}
              style={{ width: '200px' }}
              onChange={onChangeColorNumber}
            />
            <Input
              className='palette-info__palette-name'
              type='text'
              placeholder='팔레트 이름'
              name='title'
              onChange={handleInputValue}
            />
            <TextArea
              className='palette-info__palette-description'
              placeholder='팔레트 설명'
              name='description'
              onChange={handleInputValue}
            />
            <button
              className='make-palette__button'
              onClick={onClickPostButton}
            >
              저장
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default MakePalette;

import React, { useEffect, useReducer } from 'react';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';
import { EditPaletteContainer } from '../Pages_styd';
import { Slider, Input } from 'antd';
import { paletteEditPostAPI } from '../../apis/paletteAPI';

const { TextArea } = Input;

export type Action =
  | { type: 'SET_PALETTE_TITLE'; title: string }
  | { type: 'SET_PALETTE_NUMBER'; number: number }
  | { type: 'SET_PALETTE_DESCRIPTION'; description: string }
  | { type: 'SET_PALETTE_COLORS'; colors: string[] };

type editPaletteState = {
  id: number;
  userId: number;
  title: string;
  number: number;
  description: string;
  colors: string[];
};

const initialState = (data: any): editPaletteState => {
  const {
    id,
    userId,
    paletteName,
    description,
    colorCode01,
    colorCode02,
    colorCode03,
    colorCode04,
    colorCode05,
    colorCode06,
    colorCode07,
  } = data;

  const colors = [
    colorCode01,
    colorCode02,
    colorCode03,
    colorCode04,
    colorCode05,
    colorCode06,
    colorCode07,
  ].filter((code: string) => code !== null);

  return {
    id,
    userId,
    title: paletteName,
    description,
    colors,
    number: colors.length,
  };
};

function paletteReducer(
  state: editPaletteState,
  action: Action
): editPaletteState {
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
        colors: [...action.colors],
      };
    }
    default: {
      return state;
    }
  }
}

function EditPalette({ location, history }: any) {
  const [state, dispatch] = useReducer(
    paletteReducer,
    initialState(location.state)
  );

  const { title, number, description, colors, id } = state;

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
    await paletteEditPostAPI(id, {
      paletteName: title,
      description,
      colorCode01: colors[0] || null,
      colorCode02: colors[1] || null,
      colorCode03: colors[2] || null,
      colorCode04: colors[3] || null,
      colorCode05: colors[4] || null,
      colorCode06: colors[5] || null,
      colorCode07: colors[6] || null,
    });

    history.push('/');
  };

  return (
    <main>
      <span className='h1'>색갈피 만들기</span>
      <div className='makePageWrapper'>
        <EditPaletteContainer className='make-palette__color-container'>
          <EditPaletteList
            number={number}
            colors={colors}
            setNthColor={setNthColor}
          />
        </EditPaletteContainer>
        <EditPaletteContainer className='make-palette__hex-container'>
          <EditPaletteHexList number={number} colors={colors} />
        </EditPaletteContainer>
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
              value={title}
              onChange={handleInputValue}
            />
            <TextArea
              className='palette-info__palette-description'
              placeholder='팔레트 설명'
              name='description'
              value={description}
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

export default EditPalette;

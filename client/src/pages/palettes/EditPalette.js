import React, { useEffect, useReducer } from 'react';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';
import { EditPaletteContainer } from '../Pages_styd';
import { Slider, Input } from 'antd';
const { TextArea } = Input;

export const SET_PALETTE_TITLE = 'SET_PALETTE_TITLE';
export const SET_PALETTE_NUMBER = 'SET_PALETTE_NUMBER';
export const SET_PALETTE_DESCRIPTION = 'SET_PALETTE_DESCRIPTION';
export const SET_PALETTE_COLORS = 'SET_PALETTE_COLORS';

const initialState = ({ paletteName, colorCode, description }) => {
    return {
        title: paletteName,
        number: colorCode.length,
        description: description,
        colors: [...colorCode],
    };
};

const paletteReducer = (state, action) => {
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
};

const EditPalette = ({ palette }) => {
    const [state, dispatch] = useReducer(paletteReducer, initialState(palette));
    const { title, number, description, colors } = state;

    // range에 따라 number값을 변화 (화면에 표시할 색깔 개수)
    const onChangeColorNumber = (e) => {
        dispatch({ type: SET_PALETTE_NUMBER, number: e });
    };

    // number값에 따라서 색깔 들어가는 div 숫자를 변화
    useEffect(() => {
        if (number > colors.length) {
            const diff = Array(number - colors.length).fill('#ffffff');
            dispatch({
                type: SET_PALETTE_COLORS,
                colors: [...colors, ...diff],
            });
        } else if (number < colors.length) {
            dispatch({
                type: SET_PALETTE_COLORS,
                colors: [...colors.slice(0, number)],
            });
        }
        console.log(colors);
    }, [number]);

    // 제목, 설명 입력 / state에 저장 위한 함수
    const handleInputValue = (e) => {
        if (e.target.name === 'title') {
            dispatch({ type: SET_PALETTE_TITLE, title: e.target.value });
        } else if (e.target.name === 'description') {
            dispatch({
                type: SET_PALETTE_DESCRIPTION,
                description: e.target.value,
            });
        }
    };

    // n번째 색상을 수정할 때 그 색상만 색이 변하도록 하는 함수
    const setNthColor = (idx, color) => {
        dispatch({
            type: SET_PALETTE_COLORS,
            colors: [...colors.slice(0, idx), color, ...colors.slice(idx + 1)],
        });
    };

    const onClickPostButton = (e) => {
        // TODO: 서버로 팔레트 POST 요청 (axios 사용)
    };

    return (
        <main className='edit-palette__main'>
            <h1 className='edit-palette__title'> 색갈피 편집 </h1>
            <EditPaletteContainer className='edit-palette__color-container'>
                <EditPaletteList
                    number={number}
                    colors={colors}
                    setNthColor={setNthColor}
                />
            </EditPaletteContainer>
            <EditPaletteContainer className='edit-palette__hex-container'>
                <EditPaletteHexList
                    number={number}
                    colors={colors}
                    setNthColor={setNthColor}
                />
            </EditPaletteContainer>
            <section className='edit-palette__palette-info'>
                <form
                    className='palette-info__form'
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <label className='palette-info__color-range-label'>
                        색상 갯수
                        <Slider
                            className='palette-info__color-range'
                            min={2}
                            max={7}
                            step={1}
                            defaultValue={number}
                            style={{ width: '200px' }}
                            onChange={onChangeColorNumber}
                        />
                    </label>
                    <Input
                        className='palette-info__palette-name'
                        type='text'
                        placeholder='팔레트 이름'
                        name='title'
                        onChange={handleInputValue}
                        value={title}
                    />
                    <TextArea
                        className='palette-info__palette-description'
                        placeholder='팔레트 설명'
                        name='description'
                        onChange={handleInputValue}
                        value={description}
                    />
                    <button
                        className='edit-palette__button'
                        onClick={onClickPostButton}
                    >
                        저장
                    </button>
                </form>
            </section>
        </main>
    );
};

export default EditPalette;

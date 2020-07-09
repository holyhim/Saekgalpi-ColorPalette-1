import React, { useEffect, useReducer } from 'react';
import { withRouter } from 'react-router-dom';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';
import { EditPaletteContainer } from '../Pages_styd';
import { Slider, Input } from 'antd';
import axios from 'axios';

const { TextArea } = Input;

export const SET_PALETTE_TITLE = 'SET_PALETTE_TITLE';
export const SET_PALETTE_NUMBER = 'SET_PALETTE_NUMBER';
export const SET_PALETTE_DESCRIPTION = 'SET_PALETTE_DESCRIPTION';
export const SET_PALETTE_COLORS = 'SET_PALETTE_COLORS';

const initialState = ({ paletteName, colorCode, description, id, userId }) => {
    return {
        id,
        userId,
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

const EditPalette = ({ palette, isLogin, history }) => {
    if (!isLogin || !palette.id) {
        history.push('/');
    }

    const [state, dispatch] = useReducer(paletteReducer, initialState(palette));
    const { title, number, description, colors, id } = state;

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
    }, [number, colors]);

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

    const onClickPostButton = async () => {
        await axios.post(
            `http://ec2-54-180-156-40.ap-northeast-2.compute.amazonaws.com:5000/${id}`,
            {
                paletteName: title,
                description,
                colorCode01: colors[0] || null,
                colorCode02: colors[1] || null,
                colorCode03: colors[2] || null,
                colorCode04: colors[3] || null,
                colorCode05: colors[4] || null,
                colorCode06: colors[5] || null,
                colorCode07: colors[6] || null,
            }
        );
        // post 요청으로 db 수정된거 확인되면 풀기
        history.push('/');
    };

    return (
        <main>
            <span className='h1'>색갈피 편집</span>
            <div className='makePageWrapper'>
                <EditPaletteContainer className='make-palette__color-container'>
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
            </div>
        </main>
    );
};

export default withRouter(EditPalette);

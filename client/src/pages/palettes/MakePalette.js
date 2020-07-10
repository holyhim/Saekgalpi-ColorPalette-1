import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Redirect, withRouter } from 'react-router-dom';
import { Slider, Input } from 'antd';
import EditPaletteList from '../../components/palette/EditPaletteList';
import EditPaletteHexList from '../../components/palette/EditPaletteHexList';
import {
    SET_PALETTE_COLORS,
    SET_PALETTE_DESCRIPTION,
    SET_PALETTE_NUMBER,
    SET_PALETTE_TITLE,
} from './EditPalette';
import axios from 'axios';

const MakePaletteContainer = styled.section`
    width: 70vw;
    margin-bottom: 20px;
`;

const { TextArea } = Input;

const initialState = {
    title: '',
    number: 5,
    description: '',
    colors: [...Array(5).fill('#ffffff')],
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

const MakePalette = ({ userInfo, isLogin, history }) => {
    const [state, dispatch] = useReducer(paletteReducer, initialState);
    const { title, number, description, colors } = state;

    const onChangeColorNumber = (e) => {
        dispatch({ type: SET_PALETTE_NUMBER, number: e });
    };

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

    const setNthColor = (idx, color) => {
        dispatch({
            type: SET_PALETTE_COLORS,
            colors: [...colors.slice(0, idx), color, ...colors.slice(idx + 1)],
        });
    };

    const onClickPostButton = async () => {
        const makePaletteData = await axios.post(
            `http://54.180.156.40:5000/makePalette`,
            {
                id: userInfo.id,
                paletteName: title,
                description,
                colorCode01: colors[0],
                colorCode02: colors[1],
                colorCode03: colors[2],
                colorCode04: colors[3],
                colorCode05: colors[4],
                colorCode06: colors[5],
                colorCode07: colors[6],
            }
        );

        if (makePaletteData.status === 200) {
            history.push('/');
        }
    };

    return (
        <main>
            {!isLogin ? <Redirect to='/' /> : ''}
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
                    <EditPaletteHexList
                        number={number}
                        colors={colors}
                        setNthColor={setNthColor}
                    />
                </MakePaletteContainer>
                <section className='make-palette__palette-info'>
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
};

export default withRouter(MakePalette);

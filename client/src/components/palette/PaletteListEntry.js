// 낱개 팔레트 회원과 해당 팔레의 userid가 같다면 딜리트 버튼이 있어야 함
import React, { useRef } from 'react';
import { withRouter } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHeart,
    faArrowDown,
    faShareAlt,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { SET_CLICKED_PALETTE } from '../../Router';

const PaletteColors = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(${(props) => props.number}, 2fr);
    width: 280px;
    height: 160px;
    cursor: pointer;
    border: 2px solid white;
    border-radius: 15px 15px 0 15px;
    background-color: white;
`;

const PaletteColor = styled.div`
    background-color: ${(props) => props.color};
    &:nth-child(1) {
        border-radius: 15px 0 0 15px;
    }
    &:nth-last-child(1) {
        border-radius: 0 15px 0 0;
    }
`;

const PaletteListEntry = ({ palette, dispatch, history, userInfo }) => {
    const { colorCode, paletteName, id } = palette;
    const paletteColors = useRef(null);

    const onClickPalette = (e) => {
        dispatch({
            type: SET_CLICKED_PALETTE,
            palette,
        });
        history.push(`/paletteDetail/${userInfo.id}`);
    };

    const onClickDownload = async () => {
        try {
            const dataUrl = await domtoimage.toPng(paletteColors.current);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = '색갈피';
            link.click();
        } catch (error) {
            console.error('oops, something went wrong!', error);
        }
    };

    // TODO: 팔레트를 만든 사람 ID와 현재 접속해 있는 사람 ID가 같을 때만 활성화

    return (
        <div className='palette__wrapper'>
            <PaletteColors
                className='palette__colors'
                number={colorCode.length}
                onClick={onClickPalette}
                ref={paletteColors}
            >
                {colorCode.map((color, idx) => (
                    <PaletteColor
                        className='palette__color'
                        color={color}
                        key={idx}
                    />
                ))}
            </PaletteColors>
            <div className='palette__info--hidden'>
                <span className='palette__title'>{paletteName}</span>
                <div className='palette__icons'>
                    <button className='palette__like'>
                        <FontAwesomeIcon icon={faHeart} />
                    </button>
                    <button className='palette__save'>
                        <FontAwesomeIcon
                            icon={faArrowDown}
                            onClick={onClickDownload}
                        />
                    </button>
                    <button className='palette__share'>
                        <FontAwesomeIcon icon={faShareAlt} />
                    </button>
                </div>
            </div>
            <button className='palette__delete--hidden'>삭제</button>
        </div>
    );
};

export default withRouter(PaletteListEntry);

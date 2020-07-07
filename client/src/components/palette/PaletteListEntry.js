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
// TODO: 추후 데이터받아서 props.number로 넘겨주기

const PaletteColor = styled.div`
    background-color: ${(props) => props.color};
    &:nth-child(1) {
        border-radius: 15px 0 0 15px;
    }
    &:nth-last-child(1) {
        border-radius: 0 15px 0 0;
    }
`;

const PaletteListEntry = ({ history }) => {
    //주석 나중에 제거하거나 다듬을 것
    //숫자에 맞게 div를 생성하는 헬퍼 함수를 만들어야 합니다 -> 받은 숫자에 맞게 map으로 div를 만들어주는 건 어떨까요?
    const fakeColors = [
        '#55efc4',
        '#81ecec',
        '#74b9ff',
        '#a29bfe',
        '#6c5ce7',
        '#0984e3',
        '#00cec9',
    ];
    const palette = useRef(null);

    const onClickPalette = (e) => {
        history.push('/paletteDetail/:id');
    };

    const onClickDownload = async () => {
        try {
            const dataUrl = await domtoimage.toPng(palette.current);
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = '색갈피';
            link.click();
        } catch (error) {
            console.error('oops, something went wrong!', error);
        }
    };

    //* map key 수정
    return (
        <div className='palette__wrapper'>
            <PaletteColors
                className='palette__colors'
                number={fakeColors.length}
                onClick={onClickPalette}
                ref={palette}
            >
                {fakeColors.map((color, idx) => (
                    <PaletteColor
                        className='palette__color'
                        color={color}
                        key={idx}
                    />
                ))}
            </PaletteColors>
            <div className='palette__info--hidden'>
                <span className='palette__title'>타이틀</span>
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

import React, { useRef, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import domtoimage from 'dom-to-image';
import rgbHexColorCodeConverter from 'hex-rgb-color-code-converter';
import axios from 'axios';

import DELETE_PALETTE from '../../Router';

const Paltte = styled.div`
    background-color: ${(props) => props.color || 'black'};
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    &:active {
        transform: scale(1);
    }
`;

const PaletteWrapper = styled.div`
    width: 500px;
    height: 250px;
    margin-bottom: 20px;
    display: grid;

    grid-template-columns: repeat(${(props) => props.number}, 1fr);
`;

const EditButton = styled(Button)`
    color: #a6a6a6;
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    margin-bottom: 10px;
    margin-right: 10px;
    &:hover {
        background-color: #e7e7e7;
        border: 1px solid #e7e7e7;
        color: #5d5d5d;
    }
    &:focus {
        background-color: #e7e7e7;
        border: 1px solid #e7e7e7;
        color: #a6a6a6;
    }
    &:after {
        --antd-wave-shadow-color: #c7c7c7;
    }
`;

const ShareBtn = styled.button`
    all: unset;
    font-size: 1.5rem;
    cursor: pointer;
    margin-left: 20px;
`;

const ColorCodeDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.num}, 1fr);
`;

const ColorCode = styled.div`
    background-color: ${(props) => props.color};
    text-align: center;
    padding: 5px;
    font-size: 0.8em;
`;

const PaletteDescription = styled.div`
    width: 90%;
    margin: 0 auto;
    height: 5vw;
    border-top: 1px solid #c7c7c7;
    padding: 10px;
    font-size: 1.5em;
`;

const PaletteDetail = ({ isLogin, palette, dispatch, history, userInfo }) => {
    const paletteColors = useRef(null);
    const { id, userId, paletteName, colorCode, description } = palette;

    const countVisit = async () => {
        await axios.get(
            `http://ec2-54-180-156-40.ap-northeast-2.compute.amazonaws.com:5000/paletteDetailVisit/${id}`
        );
    };

    useEffect(() => {
        countVisit();
    });

    const onClickDeleteBtn = async () => {
        await axios.post(
            `http://ec2-54-180-156-40.ap-northeast-2.compute.amazonaws.com:5000/paletteDetail/${id}`
        );
        const favPalettesData = await axios.get(
            'http://ec2-54-180-156-40.ap-northeast-2.compute.amazonaws.com:5000/visitGet'
        );
        const currentPalettesData = await axios.get(
            'http://ec2-54-180-156-40.ap-northeast-2.compute.amazonaws.com:5000/updateGet'
        );

        dispatch({
            type: DELETE_PALETTE,
            favPalettes: [...favPalettesData.data],
            currentPalettes: [...currentPalettesData.data],
        });
        history.push('/');
    };

    const onClickEditBtn = () => {
        history.push(`/editPalette/${palette.id}`);
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

    return (
        <main className='palette-detail__main'>
            <span className='h1'>색갈피 상세</span>
            <div className='palette-detail__all-wrapper'>
                <div className='palette-detail__container'>
                    <div className='palette-detail__column'>
                        <PaletteWrapper
                            className='palette-detail__palette'
                            number={colorCode.length}
                            ref={paletteColors}
                        >
                            {colorCode.map((color, idx) => (
                                <CopyToClipboard text={color} key={idx}>
                                    <Paltte color={color} key={idx} />
                                </CopyToClipboard>
                            ))}
                        </PaletteWrapper>
                        <span>색상을 클릭하면 HEX 코드가 복사됩니다</span>
                        <div className='palette-detail__share-container'>
                            {!isLogin ? (
                                <></>
                            ) : (
                                <>
                                    <div>
                                        <EditButton
                                            className='palette-detail__edit-btn'
                                            onClick={onClickDeleteBtn}
                                        >
                                            색갈피 삭제
                                        </EditButton>
                                        <EditButton
                                            className='palette-detail__edit-btn'
                                            onClick={onClickEditBtn}
                                        >
                                            색갈피 편집
                                        </EditButton>
                                    </div>
                                </>
                            )}
                            <ul className='palette-detail__share-lists'>
                                <li className='palette-detail__share-item'>
                                    <CopyToClipboard
                                        text={`http://localhost:5000/${id}`}
                                    >
                                        <ShareBtn className='palette-detail__item-link'>
                                            <FontAwesomeIcon
                                                icon={faShareAlt}
                                            />
                                        </ShareBtn>
                                    </CopyToClipboard>
                                </li>
                                <li className='palette-detail__share-item'>
                                    <ShareBtn
                                        className='palette-detail__item-download'
                                        onClick={onClickDownload}
                                    >
                                        <FontAwesomeIcon icon={faArrowDown} />
                                    </ShareBtn>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='palette-detail__column'>
                        <div className='palette-detail__info'>
                            <span className='palette-detail__title'>
                                {paletteName}
                            </span>
                            <span className='palette-detail__username'>
                                {userInfo.userName}
                            </span>
                        </div>
                        <article className='palette-detail__code-container'>
                            <h5>HEX</h5>
                            <ColorCodeDetail
                                className='palette-detail__hex'
                                num={colorCode.length}
                            >
                                {colorCode.map((color, idx) => (
                                    <ColorCode color={color} key={idx}>
                                        {color}
                                    </ColorCode>
                                ))}
                            </ColorCodeDetail>
                        </article>
                        <article className='palette-detail__code-container'>
                            <h5>RGB</h5>
                            <div
                                className='palette-detail__rgb'
                                num={colorCode.length}
                            >
                                {colorCode.map((color, idx) => (
                                    <ColorCode color={color} key={idx}>
                                        {rgbHexColorCodeConverter(color)}
                                    </ColorCode>
                                ))}
                            </div>
                        </article>
                    </div>
                </div>
                <PaletteDescription className='palette-detail__description'>
                    {description}
                </PaletteDescription>
            </div>
        </main>
    );
};
export default withRouter(PaletteDetail);

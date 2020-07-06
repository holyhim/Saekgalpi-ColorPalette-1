import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import domtoimage from 'dom-to-image';
const Paltte = styled.div`
    background-color: ${(props) => props.color || 'black'};
    cursor: pointer;
`;
const PaletteWrapper = styled.div`
    width: 30vw;
    height: 30vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;
const EditButton = styled(Button)`
    color: #a6a6a6;
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    margin-top: 30px;
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
    margin-right: 1rem;
`;
const ColorCodeContainer = styled.article``;
const ColorCodeDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(${(props) => props.num}, 1fr);
    line-height: 6vh;
`;
const ColorCode = styled.div`
    background-color: ${(props) => props.color};
    text-align: center;
`;
const PaletteDescription = styled.div`
    margin-left: 4vw;
    height: 5vw;
`;
const PaletteDetail = () => {
    // props를 사용하여 변경
    // 상위컴포넌트에서 받아올 부분
    const fakeColors = ['#74b9ff', '#0984e3', '#70a1ff'];
    const palette = useRef(null);
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
    return (
        <main className='palette-detail__main'>
            <h1 className='palette-detail__title h1'>색갈피 상세</h1>
            <div className='palette-detail__all-wrapper'>
                <div className='palette-detail__container'>
                    <div className='palette-detail__column'>
                        <PaletteWrapper
                            className='palette-detail__palette'
                            ref={palette}
                        >
                            {fakeColors.map((color, idx) => (
                                <CopyToClipboard text={color} key={idx}>
                                    <Paltte color={color} key={idx} />
                                </CopyToClipboard>
                            ))}
                        </PaletteWrapper>
                        <div className='palette-detail__share-container'>
                            <EditButton className='palette-detail__edit-btn'>
                                <Link to='/editPalette/:id'>색갈피 편집</Link>
                            </EditButton>
                            <ul className='palette-detail__share-lists'>
                                <li className='palette-detail__share-item'>
                                    <ShareBtn className='palette-detail__item-link'>
                                        <FontAwesomeIcon icon={faShareAlt} />
                                    </ShareBtn>
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
                                팔레트 제목
                            </span>
                            <span className='palette-detail__username'>
                                닉네임
                            </span>
                        </div>
                        <ColorCodeContainer className='palette-detail__code-container'>
                            <h5>HEX</h5>
                            <ColorCodeDetail
                                className='palette-detail__hex'
                                num={fakeColors.length}
                            >
                                {fakeColors.map((color, idx) => (
                                    <ColorCode color={color} key={idx}>
                                        {color}
                                    </ColorCode>
                                ))}
                            </ColorCodeDetail>
                        </ColorCodeContainer>
                        <ColorCodeContainer className='palette-detail__code-container'>
                            <h5>RGB</h5>
                            <ColorCodeDetail
                                className='palette-detail__rgb'
                                num={fakeColors.length}
                            >
                                {fakeColors.map((color, idx) => (
                                    <ColorCode color={color} key={idx}>
                                        rgb
                                    </ColorCode>
                                ))}
                            </ColorCodeDetail>
                        </ColorCodeContainer>
                    </div>
                </div>
                <PaletteDescription className='palette-detail__description'>
                    설명 칸
                </PaletteDescription>
            </div>
        </main>
    );
};
export default PaletteDetail;

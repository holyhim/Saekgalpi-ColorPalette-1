import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import domtoimage from 'dom-to-image';
import './PaletteDetail.scss';

// TODO: 클릭시 카피되는것
const Paltte = styled.div`
    background-color: ${(props) => props.color || 'black'};
    cursor: pointer;
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
            <h1 className='palette-detail__title'>색갈피 상세</h1>
            <div className='palette-detail__container'>
                <div className='palette-detail__column'>
                    <div className='palette-detail__palette' ref={palette}>
                        {fakeColors.map((color, idx) => (
                            <CopyToClipboard text={color} key={idx}>
                                <Paltte color={color} key={idx} />
                            </CopyToClipboard>
                        ))}
                    </div>
                    <div className='palette-detail__share-container'>
                        <button className='palette-detail__edit-btn'>
                            <Link to='/editPalette/:id'>색갈피 편집</Link>
                        </button>
                        <ul className='palette-detail__share-lists'>
                            <li className='palette-detail__share-item'>
                                <button className='palette-detail__item-link'>
                                    <FontAwesomeIcon icon={faShareAlt} />
                                </button>
                            </li>
                            <li className='palette-detail__share-item'>
                                <button
                                    className='palette-detail__item-download'
                                    onClick={onClickDownload}
                                >
                                    <FontAwesomeIcon icon={faArrowDown} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='palette-detail__column'>
                    <div className='palette-detail__info'>
                        <span className='palette-detail__title'>
                            팔레트 제목
                        </span>
                        <span className='palette-detail__username'>닉네임</span>
                    </div>
                    <article className='palette-detail__hex'>hex</article>
                    <article className='palette-detail__rgb'>rgb</article>
                </div>
            </div>
            <div className='palette-detail__description'> 설명 칸 </div>
        </main>
    );
};

export default PaletteDetail;

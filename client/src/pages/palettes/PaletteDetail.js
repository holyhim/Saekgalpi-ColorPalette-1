import React from 'react';
import { Link } from 'react-router-dom';
import './PaletteDetail.scss';

const PaletteDetail = () => {
    //TODO: 이 페이지 들어올 때 해당 팔레트 GET 요청
    //props를 사용하여 변경

    return (
        <main className='palette-detail__main'>
            <div className='palette-detail__wrapper'>
                {/* className: wrapper */}
                <h1 className='palette-detail__title'> 팔레트 디테일 </h1>
                <div className='palette-detail__container'>
                    {/* 내부 감싸기 위한 div */}
                    <div className='palette-detail__column'>
                        {/* left palette */}
                        <div className='palette-detail__palette'>
                            팔레트 props{' '}
                        </div>
                        <Link to='/editPalette/:id'>색갈피 편집</Link>
                        <div className='palette-detail__share-container'>
                            {/* 팔레트 쉐어 */}
                            <ul className='palette-detail__share-lists'>
                                <li className='palette-detail__share-item'>
                                    <button className='palette-detail__item-link'>
                                        공유
                                    </button>
                                </li>
                                <li className='palette-detail__share-item'>
                                    <button className='palette-detail__item-download'>
                                        다운로드
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='palette-detail__column'>
                        {/* right desc */}
                        <div className='palette-detail__info'>
                            <span className='palette-detail__title'>
                                팔레트 제목
                            </span>
                            <span className='palette-detail__username'>
                                닉네임
                            </span>
                        </div>
                        <article className='palette-detail__hex'>hex</article>
                        <article className='palette-detail__rgb'>rgb</article>
                    </div>
                </div>
                <div className='palette-detail__description'> 설명 칸 </div>
            </div>
        </main>
    );
};

export default PaletteDetail;

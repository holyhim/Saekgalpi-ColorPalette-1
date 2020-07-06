import React from 'react';
import PaletteList from '../../components/palette/PaletteList';
import {} from '../Pages_styd';

const AllPalette = () => {
    const onChangeInput = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
    };

    const onClickSearchButton = () => {
        // TODO: 서버로 검색어를 전달하고 검색 결과값을 가져오는 POST 요청 (axios), 받아온 값들을 state로 저장
    };

    return (
        <main className='all-palette__main'>
            <h1 className='all-palette__title'>전체 색갈피 보기</h1>
            <form
                className='all-palette__search-form'
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <input
                    className='search-form__input'
                    type='text'
                    placeholder='검색어를 입력하세요'
                    onChange={onChangeInput}
                />
                <button
                    className='search-form__submit-button'
                    onClick={onClickSearchButton}
                >
                    검색
                </button>
            </form>
            <section className='all-palette__palettes'>
                <PaletteList />
            </section>
        </main>
    );
};

export default AllPalette;

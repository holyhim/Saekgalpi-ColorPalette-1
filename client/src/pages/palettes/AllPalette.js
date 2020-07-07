import React, { useState } from 'react';
import { Input } from 'antd';
import PaletteList from '../../components/palette/PaletteList';
import styd from 'styled-components';

import { fakeFavPalettes } from '../../fakeData';

const { Search } = Input;

const AllPalInput = styd(Search)`
    width: 400px;
    height: 40px;
`;

const AllPalette = ({ dispatch }) => {
    const [keyword, setKeyWord] = useState('');

    const onChangeInput = (e) => {
        setKeyWord(e.target.value);
    };

    return (
        <main className='all-palette__main'>
            <span className='h1'>전체 색갈피 보기</span>
            <div className='allPalWarpper'>
                <form
                    className='all-palette__search-form'
                    onSubmit={(e) => {
                        e.preventDefault();
                        // TODO: 서버로 검색어를 전달하고 검색 결과값을 가져오는 POST 요청 (axios), 받아온 값들을 state로 저장
                    }}
                >
                    <AllPalInput
                        className='search-form__input'
                        type='text'
                        placeholder='검색어를 입력하세요'
                        onChange={onChangeInput}
                    />
                </form>
                <section className='all-palette__palettes'>
                    <PaletteList
                        dispatch={dispatch}
                        palettes={fakeFavPalettes}
                    />
                </section>
            </div>
        </main>
    );
};

export default AllPalette;

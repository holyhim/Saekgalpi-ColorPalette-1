import React from 'react';
import { Input } from 'antd';
import PaletteList from '../../components/palette/PaletteList';
import styd from 'styled-components';

const { Search } = Input;

const AllPalInput = styd(Search)`
width: 400px;
height: 40px;
`;

const AllPalette = () => {
    const onChangeInput = (e) => {
        // TODO: Input 값 value로 받아 state 설정
        // e.target.value
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
                    <PaletteList />
                </section>
            </div>
        </main>
    );
};

export default AllPalette;

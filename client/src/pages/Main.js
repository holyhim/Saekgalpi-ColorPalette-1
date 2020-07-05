import React from 'react';
import { Link } from 'react-router-dom';
import PaletteList from '../components/palette/PaletteList';
import RandomColorList from '../components/palette/RandomColorList';
// import './Main.scss';

const Main = () => {
    // TODO: 메인 페이지 들어오자마자 팔레트 정보 불러오기 GET 요청 (useEffect, axios)

    return (
        <main className='main__main-content'>
            <h1>메인</h1>
            <button className='make-palette__link-btn'>
                <Link to='/makePalette'>내 색갈피 만들기</Link>
            </button>
            <section className='fav-palettes__container'>
                <h3 className='fav-palettes__title'>인기순 색갈피</h3>
                <PaletteList />
            </section>
            <section className='current-palettes__container'>
                <h3 className='current-palettes__title'>
                    최근에 올라온 색갈피
                </h3>
                <PaletteList />
            </section>
            <section className='random-colors__container'>
                <RandomColorList />
            </section>
        </main>
    );
};

export default Main;

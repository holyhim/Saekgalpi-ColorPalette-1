import React from 'react';
import { Link } from 'react-router-dom';
import PaletteList from '../components/palette/PaletteList';
import RandomColorList from '../components/palette/RandomColorList';

const Main = () => {
    // TODO: 메인 페이지 들어오자마자 팔레트 정보 불러오기 GET 요청 (useEffect, axios)

    return (
        <main>
            <button>
                <Link to='/makePalette'>내 색갈피 만들기</Link>
            </button>
            <section>
                <PaletteList />
            </section>
            <section>
                <PaletteList />
            </section>
            <RandomColorList />
        </main>
    );
};

export default Main;

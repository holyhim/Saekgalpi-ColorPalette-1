import React from 'react';
import { Link } from 'react-router-dom';
import RandomColorList from '../components/RandomColorList';

const Main = () => {
    // TODO: 메인 페이지 들어오자마자 팔레트 정보 불러오기 GET 요청 (useEffect, axios)

    return (
        <main>
            <h1>메인</h1>
            <button>
                <Link to='/makePalette'>내 색갈피 만들기</Link>
            </button>
            <section>
                추후 인기순 팔레트 정렬 컴포넌트로 대체될 예정입니다
            </section>
            <section>
                추후 최신순 팔레트 정렬 컴포넌트로 대체될 예정입니다
            </section>
            <RandomColorList />
        </main>
    );
};

export default Main;

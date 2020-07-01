import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <main>
            <h1>메인</h1>
            <Link to='/makePalette'>내 색갈피 만들기</Link>
        </main>
    );
};

export default Main;

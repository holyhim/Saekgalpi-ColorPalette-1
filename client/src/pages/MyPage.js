import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
    return (
        <main>
            <h1>마이페이지</h1>
            <Link to='/editProfile/:id'>프로필 편집</Link>
        </main>
    );
};

export default MyPage;

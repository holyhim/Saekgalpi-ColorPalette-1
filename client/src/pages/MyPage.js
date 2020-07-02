import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
    return (
        <main>
            <h1>마이페이지</h1>
            <Link to='/changeSignatureColor/:id'>시그니처 컬러 변경</Link>
            {/* 마이페이지의 내 시그니처 컬러를 누르면 이동 */}
            <Link to='/changePassword/:id'>비밀번호 변경</Link>
        </main>
    );
};

export default MyPage;

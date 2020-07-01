import React from 'react';
import { Link } from 'react-router-dom';

function SubHeader() {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/login'>로그인</Link>
                </li>
                <li>
                    <Link to='/signup'>회원가입</Link>
                </li>
                <li>
                    <Link to='/mypage'>내 색갈피</Link>
                </li>
                <li>
                    <button>로그아웃</button>
                </li>
            </ul>
            <div>
                <Link to='/'>로고</Link>
            </div>
            <div>
                <Link to='/allpalette'>모든 색갈피 보기</Link>
            </div>
        </div>
    );
}

export default SubHeader;

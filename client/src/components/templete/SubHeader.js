import React from 'react';
import { Link } from 'react-router-dom';

const SubHeader = () => {
    //주석 나중에 제거하거나 다듬을 것
    return (
        <div>
            {/*wrapper 전체를 감싸는 부분*/}
            <div>
                {/*수채화 백그라운드 넣어 봅시다*/}
                <Link to='/'>로고: SubHeader 입니다</Link>
            </div>
            <div>
                <Link to='/allPalette'>모든 색갈피 보기</Link>
            </div>
            <nav>
                {/*내비게이터*/}
                <ul>
                    <li>
                        <Link to='/signIn'>로그인</Link>
                    </li>
                    <li>
                        <Link to='/signUp'>회원가입</Link>
                    </li>
                    <li>
                        <Link to='/MyPage'>내 색갈피</Link>
                    </li>
                    <li>
                        <button>로그아웃</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SubHeader;

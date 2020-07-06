import React from 'react';
import { Link } from 'react-router-dom';
import {
    MainHeaderBtn,
    MainHeaderAllpalBtn,
    MainHeaderLogoutBtn,
} from './Templete_styd';

// TODO: 나중에 이 밑의 스타일드 컴포넌트 언더바 없는 파스칼케이스로 고칩시다!: ESLINT 오류가 납니다..

const MainHeader = () => {
    //주석 나중에 제거하거나 다듬을 것
    return (
        <div className='mainHeader__Wapper'>
            {/*wrapper 전체를 감싸는 부분*/}
            <nav>
                <ul>
                    <li>
                        <Link to='/signIn'>
                            <MainHeaderBtn>로그인</MainHeaderBtn>
                        </Link>
                    </li>
                    <li>
                        <Link to='/signUp'>
                            <MainHeaderBtn>회원가입</MainHeaderBtn>
                        </Link>
                    </li>
                    <li>
                        <Link to='/MyPage'>
                            <MainHeaderBtn>내 색갈피</MainHeaderBtn>
                        </Link>
                    </li>
                    <li>
                        <MainHeaderLogoutBtn ghost>
                            로그아웃
                        </MainHeaderLogoutBtn>
                    </li>
                </ul>
            </nav>

            <div className='mainHeader__center'>
                <div className='mainHeader__logo'>
                    {/*수채화 백그라운드 넣어 봅시다*/}
                    <Link to='/'>
                        <span className='LOGO'>
                            <span>색</span>갈피
                        </span>
                    </Link>
                    <Link to='/allPalette'>
                        <MainHeaderAllpalBtn>
                            모든 색갈피 보기
                        </MainHeaderAllpalBtn>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;

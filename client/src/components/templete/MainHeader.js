import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.scss';
import styd from 'styled-components';
import { Button } from 'antd';

// TODO: 나중에 이 밑의 스타일드 컴포넌트 언더바 없는 파스칼케이스로 고칩시다!: ESLINT 오류가 납니다..
const MainHeaderBtn = styd.button`
    font-size: 11pt;
    border: 0;
    padding: 4px 20px;
    border-radius: 30px;
    background-color: transparent;
    color: #c7c7c7;
    outline: 0;
    cursor: pointer;
    transition: color 0.3s, all 0.3s;
    &:hover{
        color: #5d5d5d;
        background-color: #e7e7e7;
        //나중에 props로 랜덤 컬러 받아 오자
    }
`;

//일단은 이렇게 놓고... 나중에 버튼 체인지를 하고 싶으면 하는 걸로 하자
const MainHeaderAllpalBtn = styd.button`
    border: 0;
    border-radius: 2px;
    color: #7a7a7a;
    width: 400px;
    height: 50px;
    font-size: 2em;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        color: #3a3a3a;
    }
`;

const MainHeaderLogoutBtn = styd(Button)`
color: #a6a6a6;
background-color: #e7e7e7;
border: 1px solid #e7e7e7;

&:hover{
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #5d5d5d;
}
&:focus {
    background-color: #e7e7e7;
    border: 1px solid #e7e7e7;
    color: #a6a6a6;
}
&:after {
    --antd-wave-shadow-color: #c7c7c7;
}
`;

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

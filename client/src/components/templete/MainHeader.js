import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.scss';
import styd from 'styled-components';
import { Divider } from 'antd';

const MainHeader__btn = styd.button`
    border: 0;
    padding: 4px 20px;
    border-radius: 30px;
    outline: 0;
    background-color: transparent;
    color: #c7c7c7;
    cursor: pointer;
    transition: color 0.4s, all 0.7s;
    &:hover{
        color: white;
        background-color: #c7c7c7;
        //나중에 props로 랜덤 컬러 받아 오자
    }
`;
const MainHeader__AllpalBtn = styd.button`
    border: 0;
    border-radius: 2px;
    color: #c7c7c7;
    width: 400px;
    height: 50px;
    font-size: 2em;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    transition: all 0.5s;
    &:hover{
        color: black;
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
                            <MainHeader__btn>로그인</MainHeader__btn>
                        </Link>
                    </li>
                    <li>
                        <Link to='/signUp'>
                            <MainHeader__btn>회원가입</MainHeader__btn>
                        </Link>
                    </li>
                    <li>
                        <Link to='/MyPage'>
                            <MainHeader__btn>내 색갈피</MainHeader__btn>
                        </Link>
                    </li>
                    <li>
                        <button>로그아웃</button>
                    </li>
                </ul>
            </nav>

            <div className='mainHeader__center'>
                <div className='mainHeader__logo'>
                    {/*수채화 백그라운드 넣어 봅시다*/}
                    <Link to='/'>
                        <span className='LOGO'>색갈피</span>
                    </Link>
                    <Link to='/allPalette'>
                        <MainHeader__AllpalBtn>
                            전체 색갈피 보기
                        </MainHeader__AllpalBtn>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;

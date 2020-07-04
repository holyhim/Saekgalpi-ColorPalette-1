import React from 'react';
import { Link } from 'react-router-dom';
import './MainHeader.scss';

const MainHeader = () => {
    //주석 나중에 제거하거나 다듬을 것
    return (
        <div className='mainHeaderWapper'>
            {/*wrapper 전체를 감싸는 부분*/}
            <nav>
                <ul>
                    <li>
                        <Link to='/signIn'>
                            <button>로그인</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/signUp'>
                            <button>회원가입</button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/MyPage'>
                            <button>내 색갈피</button>
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
                        <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FcnAIp5%2FbtqFnOrXu4B%2F2naGmXsdhF1fwvPgWy9ALK%2Fimg.png' />
                    </Link>
                </div>
                <div>
                    <Link to='/allPalette'>모든 색갈피 보기</Link>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;

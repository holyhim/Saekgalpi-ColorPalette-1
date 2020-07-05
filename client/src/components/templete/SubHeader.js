import React from 'react';
import { Link } from 'react-router-dom';
import './SubHeader.scss';
import { Button } from 'antd';

const SubHeader = () => {
    //주석 나중에 제거하거나 다듬을 것
    return (
        <div className='SubHeader__wrapper'>
            {/*wrapper 전체를 감싸는 부분*/}
            <div className='SubHeader__Logo'>
                {/*수채화 백그라운드 넣어 봅시다*/}
                <Link to='/'>
                    <span>색갈피</span>
                </Link>
            </div>
            <nav>
                {/*내비게이터*/}
                <ul>
                    <li>
                        <Link to='/allPalette'>
                            <span>모든 색갈피 보기</span>
                        </Link>
                    </li>
                    <li>
                        <span className='SubHeader__divider'>l</span>
                    </li>
                    <li>
                        <Link to='/signIn'>
                            <span>로그인</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/signUp'>
                            <Button type='primary' shape='round'>
                                회원가입
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/MyPage'>
                            <span>내 색갈피</span>
                        </Link>
                    </li>
                    <li>
                        <Button type='primary' shape='round'>
                            로그아웃
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SubHeader;

import React from 'react';
import { Link } from 'react-router-dom';
import './SubHeader.scss';
import { Button } from 'antd';
import logos from '../../images/2.png';
import styd from 'styled-components';

const SubHeader__Button = styd(Button)`
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
    color: #5d5d5d;
}
&:after {
    --antd-wave-shadow-color: #c7c7c7;
}
`;

const Allpalete__Button = styd.div`
line-height: 4.5;
padding: 0 10px;
transition: .4s all;
color: #a6a6a6;
&:hover {
    color: #4a4a4a;
    box-shadow: 0px -8px 0px 0px #4a4a4a inset;
}
`;

const SubHeader = () => {
    //주석 나중에 제거하거나 다듬을 것
    return (
        <div className='SubHeader__wrapper'>
            {/*wrapper 전체를 감싸는 부분*/}
            <div className='SubHeader__Logo'>
                {/*수채화 백그라운드 넣어 봅시다*/}
                <Link to='/'>
                    <img src={logos} />
                </Link>
            </div>
            <nav>
                {/*내비게이터*/}
                <ul>
                    <li>
                        <Link to='/allPalette'>
                            <Allpalete__Button>
                                모든 색갈피 보기
                            </Allpalete__Button>
                        </Link>
                    </li>
                    <li>
                        <span className='SubHeader__divider'>l</span>
                    </li>
                    <li>
                        <Link to='/signIn'>
                            <Allpalete__Button>로그인</Allpalete__Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/signUp'>
                            <SubHeader__Button type='primary' shape='round'>
                                회원가입
                            </SubHeader__Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/MyPage'>
                            <Allpalete__Button>내 색갈피</Allpalete__Button>
                        </Link>
                    </li>
                    <li>
                        <SubHeader__Button type='primary' shape='round'>
                            로그아웃
                        </SubHeader__Button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SubHeader;

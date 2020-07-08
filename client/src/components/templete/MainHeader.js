import React from 'react';
import { Link } from 'react-router-dom';
import { RoundButton, NoneSquareBtn, LogoutBtn } from './Templete_styd';
import { LogoutPostAPI } from '../../UserAPI';

// TODO: 나중에 이 밑의 스타일드 컴포넌트 언더바 없는 파스칼케이스로 고칩시다!: ESLINT 오류가 납니다..

const MainHeader = ({ isLogin, isAdmin, userInfo }) => {
    const onClickLogoutButton = () => {
        console.log(userInfo);
        LogoutPostAPI(userInfo).then((res) => {
            if (res.status === 200) {
                alert('로그아웃 되었습니다.');
            }
        });
    };

    return (
        <div className='mainHeader__Wapper'>
            <nav>
                {!isLogin ? (
                    <ul>
                        <li>
                            <Link to='/signIn'>
                                <RoundButton>로그인</RoundButton>
                            </Link>
                        </li>
                        <li>
                            <Link to='/SignUp'>
                                <RoundButton>회원가입</RoundButton>
                            </Link>
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link
                                to={{
                                    pathname: `${
                                        isAdmin ? '/Admin' : '/MyPage'
                                    }`,
                                }}
                            >
                                <RoundButton>내 색갈피</RoundButton>
                            </Link>
                        </li>
                        <li>
                            <LogoutBtn
                                type='ghost'
                                onClick={onClickLogoutButton}
                            >
                                로그아웃
                            </LogoutBtn>
                        </li>
                    </ul>
                )}
            </nav>

            <div className='mainHeader__center'>
                <div className='mainHeader__logo'>
                    {/*수채화 백그라운드 넣어 봅시다*/}
                    <Link to='/'>
                        <span className='LOGO no-drag'>
                            <span className='no-drag'>색</span>갈피
                        </span>
                    </Link>
                    <Link to='/allPalette'>
                        <NoneSquareBtn>색갈피 모아보기</NoneSquareBtn>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;

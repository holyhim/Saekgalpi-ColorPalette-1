import React from 'react';
import { Link } from 'react-router-dom';
import { RoundButton, NoneSquareBtn, LogoutBtn } from './Templete_styd';
import { LogoutPostAPI } from '../../UserAPI';

const MainHeader = ({
    isLogin,
    isAdmin,
    userInfo,
    setIsLogin,
    setUserInfo,
}) => {
    const onClickLogoutButton = () => {
        LogoutPostAPI(userInfo).then((res) => {
            if (res.status === 200) {
                setUserInfo({});
                setIsLogin(false);
                localStorage.removeItem('user');
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
                                        isAdmin
                                            ? '/Admin'
                                            : `/MyPage/${userInfo.id}`
                                    }`,
                                }}
                            >
                                <RoundButton>
                                    {isAdmin ? '관리자 페이지' : '내 색갈피'}
                                </RoundButton>
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

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

//메인과 서브 헤더를 바꾸는 구간입니다.
const Header = ({ isLogin, isAdmin }) => {
    let location = useLocation();
    const [path, setPath] = useState(location.pathname);
    const changeLocation = (path) => {
        setPath(path);
    };

    useEffect(() => {
        changeLocation(location.pathname);
    }, [location]);

    return (
        <header>
            {path === '/' ? (
                <MainHeader isLogin={isLogin} isAdmin={isAdmin} />
            ) : (
                <SubHeader isLogin={isLogin} isAdmin={isAdmin} />
            )}
        </header>
    );
};

export default Header;

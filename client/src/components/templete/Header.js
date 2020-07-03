import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

//메인과 서브 헤더를 바꾸는 구간입니다.
const Header = () => {
    let location = useLocation();
    const [path, setPath] = useState(location.pathname);
    const changeLocation = (path) => {
        setPath(path);
    };

    useEffect(() => {
        changeLocation(location.pathname);
    }, [location]);

    return <header>{path === '/' ? <MainHeader /> : <SubHeader />}</header>;
};

export default Header;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MainHeader from './MainHeader';
import SubHeader from './SubHeader';

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

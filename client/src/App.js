import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Footer from './components/templete/Footer.js';

import './scss/config/App.scss';
import 'antd/dist/antd.css';
const CheckLoginUser = (setUserInfo) => {
    try {
        const user = localStorage.getItem('user');
        if (!user) return;
        // 만약에 있으면 userInfo에 user값을 넣어 주고
        setUserInfo(user);
    } catch {
        localStorage.remove('user');
        //재로그인 요청
    }
};

const App = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    CheckLoginUser(setUserInfo);
    return (
        <BrowserRouter>
            <Router
                isLogin={isLogin}
                setIsLogin={setIsLogin}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
            />
            <Footer />
        </BrowserRouter>
    );
};

export default App;

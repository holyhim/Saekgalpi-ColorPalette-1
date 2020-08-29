/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';
import Footer from './components/templete/Footer.js';

import './scss/config/App.scss';
import 'antd/dist/antd.css';

const CheckLoginUser = (setUserInfo, userInfo, setIsLogin, setIsAdmin) => {
    try {
        // 만약에 있으면 userInfo에 user값을 넣어 주고
        useEffect(() => {
            const init = () => {
                if (userInfo === null) {
                    const user = localStorage.getItem('user');
                    if (!user) return;
                    setUserInfo(JSON.parse(user));
                } else {
                    if (userInfo.id === 1) {
                        setIsAdmin(true);
                    }
                    setIsLogin(true);
                }
            };
            init();
        }, []);
    } catch {
        localStorage.removeItem('user');
        //재로그인 요청
    }
};

const App = () => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState(
        JSON.parse(localStorage.getItem('user'))
    );

    CheckLoginUser(setUserInfo, userInfo, setIsLogin, setIsAdmin);

    return (
        <BrowserRouter>
            <Router
                isAdmin={isAdmin}
                setIsAdmin={setIsAdmin}
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

import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/templete/Header';
import Main from './pages/Main';
import SignIn from './pages/users/SignIn';
import SignUp from './pages/users/SignUp';
import MyPage from './pages/users/MyPage';
import AllPalette from './pages/palettes/AllPalette';
import MakePalette from './pages/palettes/MakePalette';
import EditPalette from './pages/palettes/EditPalette';
import ChangePassword from './pages/users/ChangePassword';
import PaletteDetail from './pages/palettes/PaletteDetail';
import ChangeSignatureColor from './pages/palettes/ChangeSignatureColor';

const fakeUser = {
    id: '1',
    username: '화백',
    email: 'admin@co.kr',
    signatureColor: '#000000',
};

const Router = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState(fakeUser);

    return (
        <BrowserRouter>
            <Header isLogin={isLogin} />
            <Switch>
                <Route path='/signIn'>
                    <SignIn userInfo={userInfo} />
                </Route>
                <Route path='/signUp'>
                    <SignUp />
                </Route>
                <Route path='/allPalette'>
                    <AllPalette />
                </Route>
                <Route path='/MyPage'>
                    <MyPage userInfo={userInfo} />
                </Route>

                <Route path='/changePassword/:id'>
                    <ChangePassword />
                </Route>
                <Route path='/changeSignatureColor/:id'>
                    <ChangeSignatureColor />
                </Route>
                <Route path='/editPalette/:id'>
                    <EditPalette />
                </Route>
                <Route path='/makePalette'>
                    <MakePalette />
                </Route>
                <Route path='/paletteDetail/:id'>
                    <PaletteDetail />
                </Route>

                <Route path='/' exact>
                    <Main isLogin={isLogin} />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

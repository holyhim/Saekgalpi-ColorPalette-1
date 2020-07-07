import React from 'react';
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

const Router = () => {
    // css로 제어 ->  react router는 고정되기 때문에
    // Header로 하나 빼서 그 안에서 삼항연산자로

    return (
        <BrowserRouter>
            <Header />
            <Switch>
            <Route path='/signIn'>
                    <SignIn />
                </Route>
                <Route path='/signUp'>
                    <SignUp />
                </Route>
                <Route path='/allPalette'>
                    <AllPalette />
                </Route>

                <Route path='/MyPage'>
                    <MyPage />
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
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

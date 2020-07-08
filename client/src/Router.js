import React, { useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/templete/Header';
import Main from './pages/Main';
import SignIn from './pages/users/SignIn';
import SignUp from './pages/users/SignUp';
import MyPage from './pages/users/MyPage';
import Admin from './pages/users/Admin';
import AllPalette from './pages/palettes/AllPalette';
import MakePalette from './pages/palettes/MakePalette';
import EditPalette from './pages/palettes/EditPalette';
import ChangePassword from './pages/users/ChangePassword';
import PaletteDetail from './pages/palettes/PaletteDetail';
import ChangeSignatureColor from './pages/palettes/ChangeSignatureColor';

import { fakeFavPalettes, fakeCurrentPalettes } from './fakeData';

export const SET_CLICKED_PALETTE = 'SET_CLICKED_PALETTE';
export const GET_FAV_PALETTES = 'GET_FAV_PALETTES';
export const GET_CURRENT_PALETTES = 'GET_CURRENT_PALETTES';

const initialState = {
    clickedPalette: JSON.parse(localStorage.getItem('PALETTE')) || null,
    favPalettes: fakeFavPalettes,
    currentPalettes: fakeCurrentPalettes,
};

const paletteReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CLICKED_PALETTE': {
            localStorage.setItem('PALETTE', JSON.stringify(action.palette));
            return { ...state, clickedPalette: action.palette };
        }
        case 'GET_FAV_PALETTES': {
            return {
                ...state,
                favPalettes: action.palettes,
            };
        }
        case 'GET_CURRENT_PALETTES': {
            return {
                ...state,
                currentPalettes: action.palettes,
            };
        }
        default: {
            return state;
        }
    }
};

const fakeUser = {
    id: '101010',
    username: '화백',
    email: 'admin@co.kr',
    signatureColor: '#000000',
};

const Router = () => {
    // TODO: 초기값 설정 => 비동기 과정이므로 화면에 가져온 것들이 뿌려지기 전에 초기값 설정해줘야 함
    const [isAdmin, setIsAdmin] = useState(false);

    const [isLogin, setIsLogin] = useState(true);
    const [userInfo, setUserInfo] = useState(fakeUser);
    const [state, dispatch] = useReducer(paletteReducer, initialState);
    const { clickedPalette, favPalettes, currentPalettes } = state;

    // TODO: 여기에서 로그인 여부 체크와 함께 인기순 팔레트, 최신순 팔레트를 가져와야 합니다.
    //* 페이지가 렌더링 되자마자 체크하는 것은 useEffect를 사용합니다.

    return (
        <BrowserRouter>
            <Header isLogin={isLogin} isAdmin={isAdmin} />
            <Switch>
                <Route path='/signIn'>
                    <SignIn userInfo={userInfo} />
                </Route>
                <Route path='/signUp'>
                    <SignUp userInfo={userInfo} />
                </Route>
                <Route path='/allPalette'>
                    <AllPalette dispatch={dispatch} userInfo={userInfo} />
                </Route>

                <Route path='/Admin'>
                    <Admin dispatch={dispatch} userInfo={userInfo} />
                </Route>
                <Route path='/MyPage'>
                    <MyPage userInfo={userInfo} dispatch={dispatch} />
                </Route>

                <Route path='/changePassword/:id'>
                    <ChangePassword userInfo={userInfo} />
                </Route>
                <Route path='/changeSignatureColor/:id'>
                    <ChangeSignatureColor userInfo={userInfo} />
                </Route>
                <Route path='/editPalette/:id'>
                    <EditPalette palette={clickedPalette} userInfo={userInfo} />
                </Route>
                <Route path='/makePalette' userInfo={userInfo}>
                    <MakePalette />
                </Route>
                <Route path='/paletteDetail/:id'>
                    <PaletteDetail
                        userInfo={userInfo}
                        palette={clickedPalette}
                        isLogin={isLogin}
                    />
                </Route>

                <Route path='/' exact>
                    <Main
                        isLogin={isLogin}
                        favPalettes={favPalettes}
                        currentPalettes={currentPalettes}
                        dispatch={dispatch}
                        userInfo={userInfo}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

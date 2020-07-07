import React, { useState, useReducer } from 'react';
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
    id: '1',
    username: '화백',
    email: 'admin@co.kr',
    signatureColor: '#000000',
};

const Router = () => {
    // TODO: 초기값 설정 => 비동기 과정이므로 화면에 가져온 것들이 뿌려지기 전에 초기값 설정해줘야 함
    const [isLogin, setIsLogin] = useState(true);
    const [userInfo, setUserInfo] = useState(fakeUser);
    const [state, dispatch] = useReducer(paletteReducer, initialState);
    const { clickedPalette, favPalettes, currentPalettes } = state;

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
                    <AllPalette dispatch={dispatch} />
                </Route>
                <Route path='/MyPage'>
                    <MyPage userInfo={userInfo} dispatch={dispatch} />
                </Route>

                <Route path='/changePassword/:id'>
                    <ChangePassword />
                </Route>
                <Route path='/changeSignatureColor/:id'>
                    <ChangeSignatureColor />
                </Route>
                <Route path='/editPalette/:id'>
                    <EditPalette palette={clickedPalette} />
                </Route>
                <Route path='/makePalette'>
                    <MakePalette />
                </Route>
                <Route path='/paletteDetail/:id'>
                    <PaletteDetail palette={clickedPalette} isLogin={isLogin} />
                </Route>

                <Route path='/' exact>
                    <Main
                        isLogin={isLogin}
                        favPalettes={favPalettes}
                        currentPalettes={currentPalettes}
                        dispatch={dispatch}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

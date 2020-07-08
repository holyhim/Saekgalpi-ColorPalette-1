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

export const SET_CLICKED_PALETTE = 'SET_CLICKED_PALETTE';
export const DLELTE_PALETTE = 'DLELTE_PALETTE';
export const LOADING_START = 'LOADING_START';
export const LOADING_END = 'LOADING_END';

const initializePalette = () => {
    if (localStorage.getItem('PALETTE')) {
        return JSON.parse(localStorage.getItem('PALETTE'));
    } else {
        return null;
    }
};

const initialState = {
    clickedPalette: initializePalette(),
    favPalettes: [],
    currentPalettes: [],
    isLoading: true,
};

// TODO: 마이페이지 팔레트도 갖고 있어야 함
const paletteReducer = (state, action) => {
    switch (action.type) {
        case SET_CLICKED_PALETTE: {
            localStorage.setItem('PALETTE', JSON.stringify(action.palette));
            return { ...state, clickedPalette: action.palette };
        }
        case DLELTE_PALETTE: {
            localStorage.setItem('PALETTE', null);
            console.log(action.favPalettes);
            console.log(state.favPalettes);
            return {
                ...state,
                favPalettes: [...action.favPalettes],
                currentPalettes: [...action.currentPalettes],
            };
        }
        case LOADING_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case LOADING_END: {
            return {
                ...state,
                isLoading: false,
                favPalettes: [...action.favPalettes],
                currentPalettes: [...action.currentPalettes],
            };
        }
        default: {
            return state;
        }
    }
};

const Router = () => {
    const [isAdmin, setIsAdmin] = useState(false);

    const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [state, dispatch] = useReducer(paletteReducer, initialState);
    const { clickedPalette, favPalettes, currentPalettes, isLoading } = state;

    // const isLoginHandler = () => {
    //     userInfo ? setIsLogin(true) : setIsLogin(false);
    //     //로그인이 되어 있는지 확인하는 핸들러
    // };

    return (
        <BrowserRouter>
            <Header
                isLogin={isLogin}
                isAdmin={isAdmin}
                userInfo={userInfo}
                setIsLogin={setIsLogin}
                setUserInfo={setUserInfo}
            />
            <Switch>
                <Route path='/signIn'>
                    <SignIn
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        setIsLogin={setIsLogin}
                    />
                </Route>
                <Route path='/signUp'>
                    <SignUp userInfo={userInfo} />
                </Route>
                <Route path='/allPalette'>
                    <AllPalette
                        dispatch={dispatch}
                        userInfo={userInfo}
                        isLoading={isLoading}
                    />
                </Route>
                <Route path='/admin'>
                    <Admin
                        dispatch={dispatch}
                        userInfo={userInfo}
                        isLoading={isLoading}
                    />
                </Route>
                <Route path='/MyPage'>
                    <MyPage
                        userInfo={userInfo}
                        dispatch={dispatch}
                        isLoading={isLoading}
                    />
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
                        favPalettes={favPalettes}
                        currentPalettes={currentPalettes}
                        dispatch={dispatch}
                        isLogin={isLogin}
                    />
                </Route>
                <Route path='/' exact>
                    <Main
                        isLogin={isLogin}
                        favPalettes={favPalettes}
                        currentPalettes={currentPalettes}
                        isLoading={isLoading}
                        dispatch={dispatch}
                        userInfo={userInfo}
                    />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

import React, { useReducer } from 'react';
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

const paletteReducer = (state, action) => {
    switch (action.type) {
        case SET_CLICKED_PALETTE: {
            localStorage.setItem('PALETTE', JSON.stringify(action.palette));
            return { ...state, clickedPalette: action.palette };
        }
        case DLELTE_PALETTE: {
            localStorage.setItem('PALETTE', null);
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

const Router = ({
    isAdmin,
    setIsAdmin,
    isLogin,
    setIsLogin,
    userInfo,
    setUserInfo,
}) => {
    const [state, dispatch] = useReducer(paletteReducer, initialState);
    const { clickedPalette, favPalettes, currentPalettes, isLoading } = state;

    return (
        <BrowserRouter>
            <Header
                isLogin={isLogin}
                isAdmin={isAdmin}
                userInfo={userInfo}
                setIsLogin={setIsLogin}
                setIsAdmin={setIsAdmin}
                setUserInfo={setUserInfo}
            />
            <Switch>
                <Route path='/signIn'>
                    <SignIn
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        setIsLogin={setIsLogin}
                        isLogin={isLogin}
                        setIsAdmin={setIsAdmin}
                    />
                </Route>
                <Route path='/signUp'>
                    <SignUp userInfo={userInfo} isLogin={isLogin} />
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
                        isAdmin={isAdmin}
                        isLogin={isLogin}
                    />
                </Route>
                <Route path='/MyPage/:id'>
                    <MyPage
                        userInfo={userInfo}
                        dispatch={dispatch}
                        isLoading={isLoading}
                        isLogin={isLogin}
                        isAdmin={isAdmin}
                    />
                </Route>
                <Route path='/changePassword/:id'>
                    <ChangePassword userInfo={userInfo} />
                </Route>
                <Route path='/changeSignatureColor/:id'>
                    <ChangeSignatureColor
                        userInfo={userInfo}
                        setUserInfo={setUserInfo}
                        isLogin={isLogin}
                    />
                </Route>
                <Route path='/editPalette/:id'>
                    <EditPalette
                        palette={clickedPalette}
                        userInfo={userInfo}
                        isLogin={isLogin}
                    />
                </Route>
                <Route path='/makePalette' userInfo={userInfo}>
                    <MakePalette userInfo={userInfo} isLogin={isLogin} />
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

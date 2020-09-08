import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header
        isLogin={isLogin}
        isAdmin={isAdmin}
        userInfo={userInfo}
        setIsLogin={setIsLogin}
        setIsAdmin={setIsAdmin}
        setUserInfo={setUserInfo}
      /> */}
      <Switch>
        {/* <Route path='/signIn'>
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
        </Route> */}
        <Route path='/' exact>
          <Main
          // isLogin={isLogin}
          // favPalettes={favPalettes}
          // currentPalettes={currentPalettes}
          // isLoading={isLoading}
          // dispatch={dispatch}
          // userInfo={userInfo}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

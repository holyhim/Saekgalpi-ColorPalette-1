import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import PaletteDetail from './pages/palettes/PaletteDetail';
import MakePalette from './pages/palettes/MakePalette';
import EditPalette from './pages/palettes/EditPalette';
import AllPalette from './pages/palettes/AllPalette';

function Router() {
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
*/}
        <Route path='/' exact component={Main} />
        <Route path='/paletteDetail/:id' component={PaletteDetail} />
        <Route path='/makePalette' component={MakePalette} />
        <Route path='/editPalette/:id' component={EditPalette} />
        <Route path='/allPalette' component={AllPalette} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;

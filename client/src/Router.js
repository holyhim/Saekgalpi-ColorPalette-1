import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyPage from './pages/MyPage';
import AllPalette from './pages/AllPalette';
import MakePalette from './pages/MakePalette';
import EditPalette from './pages/EditPalette';
import ChangePassword from './pages/ChangePassword';
import PaletteDetail from './pages/PaletteDetail';
import ChangeSignatureColor from './pages/ChangeSignatureColor';

const Router = () => {
    // css로 제어 ->  react router는 고정되기 때문에
    // Header로 하나 빼서 그 안에서 삼항연산자로

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/signIn' component={SignIn} />
                <Route path='/signUp' component={SignUp} />
                <Route path='/allPalette' component={AllPalette} />

                <Route path='/MyPage' component={MyPage} />

                <Route path='/changePassword/:id' component={ChangePassword} />
                <Route
                    path='/changeSignatureColor/:id'
                    component={ChangeSignatureColor}
                />
                <Route path='/editPalette/:id' component={EditPalette} />
                <Route path='/makePalette' component={MakePalette} />
                <Route path='/paletteDetail/:id' component={PaletteDetail} />

                <Route path='/' component={Main} exact />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import SubHeader from './components/SubHeader';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Main from './pages/Main';
import MyPage from './pages/MyPage';
import AllPalette from './pages/AllPalette';
import MakePalette from './pages/MakePalette';
import EditPalette from './pages/EditPalette';
import EditProfile from './pages/EditProfile';
import PaletteDetail from './pages/PaletteDetail';

export default () => (
    <Router>
        <MainHeader />
        {/* <SubHeader /> */}
        <Switch>
            <Route path='/signIn' component={SignIn} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/allPalette' component={AllPalette} />

            <Route path='/MyPage' component={MyPage} />

            <Route path='/editProfile/:id' component={EditProfile} />
            <Route path='/editPalette/:id' component={EditPalette} />
            <Route path='/makePalette' component={MakePalette} />
            <Route path='/paletteDetail/:id' component={PaletteDetail} />

            <Route path='/' component={Main} exact />
        </Switch>
    </Router>
);

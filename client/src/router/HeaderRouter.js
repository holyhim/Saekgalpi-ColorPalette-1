import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Main from '../pages/Main';
import MyPage from '../pages/MyPage';
import Allpelette from '../pages/AllPelette';
import MainHeader from '../components/MainHeader';
import SubHeader from '../components/SubHeader';

export default () => (
    <Router>
        <MainHeader />
        <SubHeader />
        <Switch>
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/allPalette' component={Allpelette} />

            <Route path='/mypage' component={MyPage} />

            <Route path='/' component={Main} exact />
        </Switch>
    </Router>
);
